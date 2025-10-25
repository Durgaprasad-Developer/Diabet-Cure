# Diabet Cure 

![Project Banner](./client/src/assets/mockups/landingPage.png)

**Diabet Cure** is a full-stack web application designed to help users monitor and manage their glucose levels efficiently. The platform provides personalized AI-generated reports, dashboards, and insights for better health management.  

---

## Deployment and testing 
**Deployed Link:** [Diabet Cure](https://diabet-cure.vercel.app/landingpage)

**Testing Credentials**
```bash
    {
  "name": "Durga Prasad",
  "userName": "durga123",
  "email": "durga@example.com",
  "password": "StrongP@ssw0rd"
}
```

## Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)

---

## Features

- **AI Glucose Reports:** Generates detailed, doctor-friendly glucose reports based on user data.  
- **User Dashboard:** Visualize glucose levels, meal contexts, and trends.  
- **Profile Management:** Users can set up and update their profile and health details.  
- **Authentication:** Secure sign-up, login, and forgot password functionality.  
- **Responsive UI:** Works seamlessly on mobile and desktop devices.

---

## Screenshots

### Landing Page
![Landing Page](./client/src/assets/mockups/landingPage.png)

### Dashboard
![Dashboard](./client/src/assets/mockups/dashboard.png)

### Profile
![Profile](./client/src/assets/mockups/profile.png)

### Profile Setup
![Profile Setup](./client/src/assets/mockups/editProfile.png)

### AI Report
![AI Report](./client/src/assets/mockups/AIReport.png)

### Sign Up
![SignUp](./client/src/assets/mockups/signUp.png)

### Sign In
![SignUp](./client/src/assets/mockups/signIn.png)

---

## Tech Stack

- **Frontend:** React, Tailwind CSS 
- **Backend:** Node.js, Express.js, MongoDB  
- **Authentication:** JWT 
- **AI Integration:** Gemini 2.5-flash for glucose report generation  
- **State Management:** Redux Toolkit  

---

## Installation

Follow these steps to run the project locally:

1. **Clone the repository**
```bash
git clone https://github.com/Durgaprasad-Developer/Diabet-Cure
cd diabet-cure
```

2. **Install frontend dependencies**
```bash
cd client
npm install
```

3. **Install backend dependencies**
```bash
cd Server
npm install
```

4. **Setup environment variables**
Create a .env file in the root of your backend folder:
```bash
PORT=8000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
JWT_SECRET=your_jwt_secret
```

5. **Run the application**
```bash
# Backend
npm run dev

# Frontend (in a separate terminal)
cd ../frontend
npm start
```
The app should now be running at http://localhost:8000.

## Usage

1. Sign up or log in with your credentials.

2. Fill in your profile details and health information.

3. Add your glucose readings manually or via supported devices.

4. View your dashboard to monitor trends and insights.

5. Generate AI-powered glucose reports anytime.

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/auth/signup` | Create a new user account |
| POST   | `/api/auth/login` | Log in an existing user |

### User
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/users/current` | Get user profile by ID |
| PUT    | `/api/users/profileupdate` | Update user profile and health details |
| Post | `/api/users/profile` | Create  a user account |

### Glucose Readings
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/glucose` | Add a new glucose reading |
| GET    | `/api/glucose` | Fetch all readings for a user |
| GET    | `/api/glucose/main` | Fetch all readings . Sorted by dates |
| GET | `/api/glucose/averages` | Fetch readings average . Sorted by dates |
| GET | `/api/glucose/summary` | Fetch readings summary . Sorted by dates |

### AI Reports
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/glucose/aireports` | Generate or fetch AI-powered glucose report for a user |

## User Flow

The typical user journey in **Diabetic Cure** is as follows:

1. **Landing Page**
   - User visits the landing page and learns about the app.
   - Options: Sign Up or Sign In.

2. **Sign Up / Sign In**
   - New users create an account using email, username, and password.
   - Returning users log in with their credentials.
   - Password recovery is available via "Forgot Password".

3. **Dashboard Access**
   - After login, users land on the dashboard.
   - Dashboard displays:
     - Glucose readings overview
     - Trends and visual graphs
     - Meal context and health summaries

4. **Glucose Readings**
   - Users can:
     - Add new readings manually
     - Edit or delete previous readings
   - All readings contribute to trends and AI report generation.

5. **AI-Powered Reports**
   - Users can generate AI reports anytime.
   - Reports summarize glucose trends, patterns, and insights in a doctor-friendly format.

6. **Profile Management**
   - Users can update their health details, password, or personal info anytime.
   - Changes reflect immediately on the dashboard and reports.

## Features

### 1. AI Glucose Reports
- Generates detailed, doctor-friendly reports based on user glucose readings.
- Uses AI (Gemini 2.5-flash) to analyze patterns, trends, and anomalies.
- Provides actionable insights to help users understand their health better.
- Can be downloaded or shared with healthcare professionals.

### 2. User Dashboard
- Centralized hub displaying all glucose readings in visual charts and graphs.
- Shows trends over time, including daily, weekly, and monthly averages.
- Meal context and activity data are integrated to help identify triggers.
- Quick access to generate AI reports.

### 3. Profile Management
- Users can create, update, and manage personal information.
- Supports health details such as age, weight, height, diabetes type, and meal habits.
- Ensures that updates automatically reflect on dashboards and reports.

### 4. Glucose Reading Management
- Add new readings manually with time and context (e.g., before/after meals).
- Edit or delete previous readings for accuracy.
- All readings contribute to AI analysis and trend visualization.

### 5. Authentication & Security
- Secure sign-up, login, and forgot password functionality.
- Passwords are encrypted using best practices.
- JWT-based authentication ensures secure sessions.

### 6. Responsive UI
- Fully responsive design for mobile, tablet, and desktop devices.
- Intuitive interface for both tech-savvy and non-technical users.
- Clean layouts with Tailwind CSS for consistent visual appeal.

### 7. Future-Ready Integration
- Designed to support device integrations (e.g., glucose meters or smartwatches) in future updates.
- AI system architecture allows easy expansion for additional health metrics.

## Troubleshooting

### 1. Backend Not Starting
- **Issue:** `npm run dev` fails or server does not start.
- **Solution:**
  - Ensure you are in the correct backend folder (`cd Server` or `cd backend`).
  - Check that Node.js version >= 18 is installed.
  - Verify `.env` variables are correctly set (`PORT`, `MONGO_URI`, `JWT_SECRET`, `OPENAI_API_KEY`).
  - Run `npm install` to ensure all dependencies are installed.

### 2. Frontend Not Loading
- **Issue:** `npm start` fails or page is blank.
- **Solution:**
  - Make sure you are in the correct frontend folder (`cd client` or `cd frontend`).
  - Ensure dependencies are installed: `npm install`.
  - Check that the backend server is running, as API calls depend on it.
  - Open browser console for errors and fix missing imports or paths.

### 3. Database Connection Errors
- **Issue:** `MongooseServerSelectionError` or connection refused.
- **Solution:**
  - Verify your `MONGO_URI` in `.env` is correct and accessible.
  - Ensure MongoDB service is running locally, or the cloud instance allows your IP.
  - Check for network/firewall restrictions.

### 4. Authentication Issues
- **Issue:** Login/signup fails or JWT errors occur.
- **Solution:**
  - Ensure `JWT_SECRET` in `.env` matches the one used in backend.
  - Clear browser cache or local storage if tokens are invalid.
  - Verify payload and headers for API requests are correct.

### 5. AI Reports Not Generating
- **Issue:** AI report API returns errors or blank reports.
- **Solution:**
  - Ensure `OPENAI_API_KEY` is set in `.env` and has valid access.
  - Check that glucose readings exist for the user; AI needs data to generate insights.
  - Inspect backend logs for API response errors.

### 6. Images Not Loading
- **Issue:** Screenshots or assets not visible on frontend.
- **Solution:**
  - Verify the file paths in your `src/assets` folder.
  - Ensure file names and extensions match exactly (case-sensitive).
  - Rebuild frontend with `npm start` after fixing paths.

### 7. CORS Issues
- **Issue:** Browser blocks requests to the backend.
- **Solution:**
  - Make sure the backend has CORS enabled for frontend origin.
  - Check `Access-Control-Allow-Origin` headers in server configuration.

## Contributing

Contributions are welcome! Feel free to fork the repository, make improvements, and submit a pull request. Whether it’s fixing bugs, improving features, or enhancing documentation, your help is appreciated.








