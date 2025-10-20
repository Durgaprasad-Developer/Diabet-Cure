import GlucoseReadings from "../models/glucosereading.model.js";
// add glucoseReadings
export const addGlucoseReading = async(req, res) => {
    try{
    const {value, mealContext, mealTag, notes} = req.body;
    const userId = req.userId;

    if(!value || !mealContext) return res.status(404).send("please fill the required data");

    const data = await GlucoseReadings.create({
        userId,
        value,
        mealContext,
        mealTag,
        notes
    })
    res.status(201).send(data)
}catch(err){
    console.log("Server error",err);
}
}

// Get raw readings (for line chart, raw data)
export const getGlucoseReadings = async(req, res) =>{
    try{
    const userId = req.userId;
    const {start, end, mealContext} = req.query;
    const query = {userId}

    if(start && end){
        query.createdAt = {$gte: new Date(start), $lte: new Date(end)};
    }
    if(mealContext){
        query.mealContext = mealContext;
    }
    const data = await GlucoseReadings.find(query).sort({createdAt:1})
    res.json({sucess:true, data:data})
    }catch(err){
        console.log(err);
    }
}

// Get lineChart Gluco Readings

export const getGlucomain = async(req, res) => {
    try{
        const userId = req.userId;
        const {start, end} = req.query;
        const query = {userId}

        if(start & end){
            query.createdAt = {$gte: new Date(start), $lte: new Date(end)}
        }

        const result = await GlucoseReadings.find(query).sort({createdAt:1})

        const groupbyDate = {};

        result.forEach(item => {
            const date = new Date(item.createdAt).toLocaleDateString();

            if(!groupbyDate[date]){
                groupbyDate[date] = {preMeal: null, postMeal: null};
            }

            if(item.mealContext === "preMeal") groupbyDate[date].preMeal = item.value;
            if(item.mealContext === "postMeal") groupbyDate[date].postMeal = item.value;
        })

        const chartData = Object.entries(groupbyDate).map(([date, values])=>({
            name:date,
            preMeal:values.preMeal,
            postMeal:values.postMeal
        }))
        res.json({success:true, chartData})
    }catch(err){
        console.error("get Gluco main data error", err);
    }
}

// Get averages (for bar chart, grouped by mealTag)

export const getglucoseAverages = async(req, res) => {
    try{
        const userId = req.userId;
        const {start, end} = req.query;
        const query = {userId};
        if(start && end){
            query.createdAt = {$gte: new Date(start), $lte: new Date(end)};
        }
        const readings = await GlucoseReadings.find(query);

        let grouped = {}

        readings.forEach((r)=>{
            if(!r.mealTag || !r.mealContext) return
            if(!grouped[r.mealTag]) grouped[r.mealTag] = {preMeal: [], postMeal:[]}
            grouped[r.mealTag][r.mealContext].push(r.value);
        });

        let averages = {}

        Object.keys(grouped).forEach(mealTag => {
            averages[mealTag] = {}

            Object.keys(grouped[mealTag]).forEach(mealContext => {
                let values = grouped[mealTag][mealContext];
                if(values.length>0){
                    let sum = values.reduce((a,b)=> a+b, 0);
                    averages[mealTag][mealContext] = sum/values.length;
                }else{
                    averages[mealTag][mealContext] = null
                }
            })
        })
        res.json({success: true, averages})
    }catch(err){
        res.status(500).json({success: false, message: err.message})
    }
}

// Get pie chart summary (low, normal, high)

export const getGlucoseSummary = async(req, res) => {
    try{
    const userId = req.userId;
    const {start, end, mealContext}  = req.query;
    const query = {userId}
    if(start && end){
        query.createAt = {$gte : new Date(start), $lte : new Date(end)}
    }
    if(mealContext){
        query.mealContext = mealContext
    }

    const readings = await GlucoseReadings.find(query);

    let low = 0, normal = 0, high = 0;

    readings.forEach(r => {
        if(r.mealContext === "preMeal"){
            if(r.value < 80){
                low++;
            }else if (r.value > 130){
                high++;
            }else{
                normal++
            }
        }else{
            if(r.value <80){
                low++;
            }else if(r.value > 180){
                high++;
            }else{
                normal++;
            }
        }
    })

    res.json({success:true, low, normal, high})
}catch(err){
    res.json({success:false, message: err.message})
}
};