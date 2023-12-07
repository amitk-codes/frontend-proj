import { AuthPage } from "./components/AuthPage";
import { DetailsPage } from "./components/DetailsPage";
import "./App.css"

function App() {
  return (
    <div className="flex">
      <DetailsPage/>
      <AuthPage/>
    </div>
  );
}

export default App;
