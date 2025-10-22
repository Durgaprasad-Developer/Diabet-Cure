import ai from "../utils/geminiClient.js"
import GlucoseReadings from "../models/glucosereading.model.js";
import User from "../models/user.model.js";
// add glucoseReadings
export const addGlucoseReading = async (req, res) => {
    try {
        const { value, mealContext, mealTag, notes } = req.body;
        const userId = req.userId;

        if (!value || !mealContext) return res.status(404).send("please fill the required data");

        const data = await GlucoseReadings.create({
            userId,
            value,
            mealContext,
            mealTag,
            notes
        })
        res.status(201).send(data)
    } catch (err) {
        console.log("Server error", err);
    }
}

// Get raw readings (for line chart, raw data)
export const getGlucoseReadings = async (req, res) => {
    try {
        const userId = req.userId;
        const { start, end, mealContext } = req.query;
        const query = { userId }

        if (start && end) {
            query.createdAt = { $gte: new Date(start), $lte: new Date(end) };
        }
        if (mealContext) {
            query.mealContext = mealContext;
        }
        const data = await GlucoseReadings.find(query).sort({ createdAt: 1 })
        res.json({ sucess: true, data: data })
    } catch (err) {
        console.log(err);
    }
}

// Get lineChart Gluco Readings

export const getGlucomain = async (req, res) => {
    try {
        const userId = req.userId;
        const { start, end } = req.query;
        const query = { userId }

        if (start & end) {
            query.createdAt = { $gte: new Date(start), $lte: new Date(end) }
        }

        const result = await GlucoseReadings.find(query).sort({ createdAt: 1 })

        const groupbyDate = {};

        result.forEach(item => {
            const date = new Date(item.createdAt).toLocaleDateString();

            if (!groupbyDate[date]) {
                groupbyDate[date] = { preMeal: null, postMeal: null };
            }

            if (item.mealContext === "preMeal") groupbyDate[date].preMeal = item.value;
            if (item.mealContext === "postMeal") groupbyDate[date].postMeal = item.value;
        })

        const chartData = Object.entries(groupbyDate).map(([date, values]) => ({
            name: date,
            preMeal: values.preMeal,
            postMeal: values.postMeal
        }))
        res.json({ success: true, chartData })
    } catch (err) {
        console.error("get Gluco main data error", err);
    }
}

// Get averages (for bar chart, grouped by mealTag)

export const getglucoseAverages = async (req, res) => {
    try {
        const userId = req.userId;
        const { start, end } = req.query;
        const query = { userId };
        if (start && end) {
            query.createdAt = { $gte: new Date(start), $lte: new Date(end) };
        }
        const readings = await GlucoseReadings.find(query);

        let grouped = {}

        readings.forEach((r) => {
            if (!r.mealTag || !r.mealContext) return
            if (!grouped[r.mealTag]) grouped[r.mealTag] = { preMeal: [], postMeal: [] }
            grouped[r.mealTag][r.mealContext].push(r.value);
        });

        let averages = {}

        Object.keys(grouped).forEach(mealTag => {
            averages[mealTag] = {}

            Object.keys(grouped[mealTag]).forEach(mealContext => {
                let values = grouped[mealTag][mealContext];
                if (values.length > 0) {
                    let sum = values.reduce((a, b) => a + b, 0);
                    averages[mealTag][mealContext] = sum / values.length;
                } else {
                    averages[mealTag][mealContext] = null
                }
            })
        })
        res.json({ success: true, averages })
    } catch (err) {
        res.status(500).json({ success: false, message: err.message })
    }
}

// Get pie chart summary (low, normal, high)

export const getGlucoseSummary = async (req, res) => {
    try {
        const userId = req.userId;
        const { start, end, mealContext } = req.query;
        const query = { userId }
        if (start && end) {
            query.createAt = { $gte: new Date(start), $lte: new Date(end) }
        }
        if (mealContext) {
            query.mealContext = mealContext
        }

        const readings = await GlucoseReadings.find(query);

        let low = 0, normal = 0, high = 0;

        readings.forEach(r => {
            if (r.mealContext === "preMeal") {
                if (r.value < 80) {
                    low++;
                } else if (r.value > 130) {
                    high++;
                } else {
                    normal++
                }
            } else {
                if (r.value < 80) {
                    low++;
                } else if (r.value > 180) {
                    high++;
                } else {
                    normal++;
                }
            }
        })

        res.json({ success: true, low, normal, high })
    } catch (err) {
        res.json({ success: false, message: err.message })
    }
};

// controllers/glucoseReadings.controllers.js

export const glucoseReport = async (req, res) => {
    try {
        const userId = req.userId;
        const gluco = await GlucoseReadings.find({ userId })
        const userData = await User.findById(userId)
        const reportDate = new Date().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
        // For demo, simple input
        const contents = `You are GlucoAI, an AI Report Assistant specialized in generating glucose health reports.

Task: Generate a comprehensive, medical-style glucose report for the user using the following inputs:
- User glucose data: ${gluco}
- User details: ${userData}
- Report Date: ${reportDate}

note:ignore the wrong or unexpected data and take the report of accurate data

Instructions:
1. Begin the report with the **Report Period and Date**.
2. Use the user's **name** throughout the report.
3. Structure the report for **both the user and doctor**:
   - **Summary:** average, min, max glucose readings.
   - **Time-specific highlights:** note when glucose was normal, high, or low.
   - **Analysis:** explain possible causes for spikes/drops (meal impact, sleep, stress, activity).
   - **Recommendations:** actionable steps for maintaining healthy glucose levels.
4. Present the information in a **clear, readable format** with:
   - Tables or charts for numeric data when helpful.
   - Images only if they **add value** (e.g., trend charts or glucose pattern visualizations).
5. Keep text **concise and actionable**, avoid unnecessary long paragraphs.
6. Tone: professional, informative, and easy to understand for both patients and doctors.
7. End with a **short actionable summary** for the user.

Example structure:
------------------------------------------------
Report Period: 1 Oct 2025 – 21 Oct 2025
Patient Name: John Doe

Summary:
- Average Glucose: 112 mg/dL
- Min: 78 mg/dL | Max: 160 mg/dL

Time-specific Highlights:
- Morning (6–9 AM): Normal
- Post-lunch (1–2 PM): High on 3 days
- Evening (7–9 PM): Normal

Analysis:
- Post-lunch spikes likely due to high-carb meals.
- Low readings in the morning could be due to skipped breakfast or delayed snacks.

Recommendations:
- Reduce carbs at lunch.
- Monitor fasting glucose and maintain hydration.
- Consult your doctor if post-lunch spikes persist.
- Diet + excercise in table format 

[Optional Trend Chart Image Here]

Actionable Summary:
- Maintain regular meal timings.
- Track glucose after meals.
- Follow dietary guidance from your doctor.

------------------------------------------------
Generate the report following this structure using the data provided. and add a disclimer in the end to users this is generated based on the glucose data and user data it is recommanded to approch doctors for any medications
`;

        // Generate AI report
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: contents,
            config: {
                systemInstruction: "You are a medical assistant AI generating glucose reports.",
            },
        });
        const reportText = response.text || "No report generated";

        return res.status(200).json({
            success: true,
            report: reportText
        });

    } catch (err) {
        console.error("AI Report Error:", err.message || err);

        return res.status(500).json({
            success: false,
            message: "Failed to generate glucose report",
            error: err.message || err,
        });
    }
};

