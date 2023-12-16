import "./App.css";
import { BrowserRouter } from "react-router-dom";

import PageWrapper from "./components/PageWarpper";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PageWrapper />
      </div>
    </BrowserRouter>
  );
}

export default App;
