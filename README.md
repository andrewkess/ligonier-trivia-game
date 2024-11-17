
# **Ligonier Trivia Game**

Welcome to the **Ligonier Trivia Game**, a 10-question, true-or-false trivia app built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project was developed as part of a coding challenge, adhering to industry best practices for state management, navigation, and UI/UX implementation.

## **Live Demo**

Experience the app live: [**Ligonier Trivia Game**](https://ligonier-trivia-game.vercel.app/)

---

## **Features**

### **Core Functionality**
- **Home Screen**: 
  - Displays a welcome message.
  - Button to start the quiz.
- **Quiz Screen**: 
  - Displays the current question and its category.
  - Automatically shows the next question after an answer is selected.
  - Keeps track of progress and displays results upon completion.
- **Results Screen**: 
  - Shows the total score (correct answers/total questions).
  - Lists each question with an indicator of correct or incorrect answers.
  - Option to restart the quiz.

### **Technical Implementation**
- **Framework**: Built with **Next.js** for server-side rendering and optimized performance.
- **Styling**: Used **Tailwind CSS** for responsive design, ensuring smooth usability on both desktop and mobile devices.
- **State Management**: Managed using **React useState**, ensuring proper control of application state and data flow.
- **Navigation**: Leveraged built-in Next.js page navigation for smooth user transitions between screens.
- **Componentization**: Structured the app into reusable components (`Home`, `Quiz`, `Results`) for scalability and maintainability.
- **API Integration**: Fetches trivia questions dynamically using the Open Trivia DB API.
- **Separation of Concerns**: Business logic encapsulated in hooks, keeping UI and logic decoupled.

---

## **Technologies Used**
- **Next.js**: Framework for React-based web applications.
- **TypeScript**: Ensures type safety and better developer experience.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **Open Trivia DB API**: Provides the trivia questions for the app.

---

## **Setup and Installation**

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ligonier-trivia-game.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ligonier-trivia-game
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` in your browser.

---

## **Future Improvements**
- Add difficulty level selection (easy, medium, hard).
- Introduce a timer for each question to enhance gameplay.
- Improve question UI with animations for better engagement.
- Implement a leaderboard to track high scores.

---

## **Acknowledgments**
- Challenge Brief: [Coding Challenge](https://gist.github.com/DevanB/0a851886d6cc059e7a751b328917325c)
- Trivia Questions API: [Open Trivia DB API](https://opentdb.com)

