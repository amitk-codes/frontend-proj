import { AuthPage } from "./components/AuthPage";
import { DetailsPage } from "./components/DetailsPage";
import "./App.css"

function App() {
  return (
    <div className="flex-justify-between">
      <DetailsPage/>
      <AuthPage/>
    </div>
  );
}

export default App;
