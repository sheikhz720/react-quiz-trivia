import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import QuizScreen from "./QuizScreen";
import ResultScreen from "./ResultScreen";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/quiz" element={<QuizScreen />} />
                <Route path="/results" element={<ResultScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;