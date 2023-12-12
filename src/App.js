import { AuthPage } from "./components/AuthPage";
import { DetailsPage } from "./components/DetailsPage";
import "./App.css"
import { useState } from "react";

function App() {
  const [toSlide, setToSlide] = useState(false)
  return (
    <div className="app-container">
      <DetailsPage toSlide={toSlide} setToSlide={setToSlide} />
      <AuthPage toSlide={toSlide} setToSlide={setToSlide} />
    </div>
  );
}

export default App;
