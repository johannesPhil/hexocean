import { useState } from "react";
import "./App.css";

import RecipeForm from "./components/RecipeForm";
import SuccessModal from "./components/SuccessModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <div className="media"></div>
          <RecipeForm setShowModal={setShowModal} />
          {showModal && <SuccessModal setShowModal={setShowModal} />}
        </div>
      </div>
    </>
  );
}

export default App;
