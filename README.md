# Workout Buddy

Welcome to **Workout Buddy**, a sleek and efficient MERN stack web application designed to help you manage your workout routines effortlessly. Track your progress, stay organized, and achieve your fitness goals!

## 🌟 Features

- **Add Workouts**: Log your workouts with details like title, load, and reps.
- **View Workouts**: Access all your workout data with a clean, user-friendly interface.
- **Edit Workouts**: Update existing workout details effortlessly.
- **Delete Workouts**: Remove outdated or incorrect data with a single click.

## 🏗️ Project Architecture

This project follows the **MERN stack** architecture:

- **Frontend**: React.js with context-based state management for seamless interactivity.
- **Backend**: Node.js and Express.js for API endpoints.
- **Database**: MongoDB to store and manage workout data.

### Folder Structure

```
MERN_Web_App/
├── backend/         # Server-side code
│   ├── controllers/ # Logic for API endpoints
│   ├── models/      # MongoDB schemas
│   ├── routes/      # API routes
│   ├── server.js    # Main server file
├── frontend/        # Client-side code
│   ├── src/         # React components, pages, and context
│   ├── public/      # Public assets (e.g., HTML, icons)
├── .gitignore       # Files to ignore in version control
├── README.md        # Project documentation
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- **Node.js** and **npm** installed
- **MongoDB** running locally or a cloud instance (e.g., MongoDB Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SuwanSankaja/Workout_Buddy.git
   cd MERN_Web_App
   ```

2. Install dependencies for the backend:

   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend:

   ```bash
   cd ../frontend
   npm install
   ```

### Configuration

Create a `.env` file in the `backend` folder with the following:

```env
MONGO_URI=your-mongodb-connection-string
PORT=4000
```

### Run the Application

1. Start the backend server:

   ```bash
   cd .\backend
   npm start
   ```

2. Start the React frontend:

   ```bash
   cd .\frontend
   npm start
   ```

3. Open your browser and navigate to:

   ```
   http://localhost:4000
   ```

## 🛠️ Key Technologies

- **Frontend**: React.js, React Router, Context API
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Styling**: CSS

## 📂 Backend Overview

- **server.js**: Initializes the Express server and connects to MongoDB.
- **workout.controller.js**: Defines CRUD operations for workouts.
- **workout.model.js**: Mongoose schema for workout data.
- **workout.route.js**: Routes for the workout-related API.

## 🎨 Frontend Overview

- **Home.js**: Main page displaying workout details and a form to add workouts.
- **WorkoutDetails.js**: Component for rendering individual workout data.
- **WorkoutForm.js**: Form for creating new workouts.
- **Navbar.js**: Navigation bar for the app.
- **useWorkoutsContext.js**: Custom hook for managing workout state.

## 📷 Screenshots

### Home Page

![Home Page](https://github.com/SuwanSankaja/Private_Files/blob/main/Workout_Buddy/homepage.png)

### Add a Workout

![Add Workout](https://github.com/SuwanSankaja/Private_Files/blob/main/Workout_Buddy/add_a_new_product.png)

## 🧑‍💻 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue for feature suggestions or bug fixes.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request.
