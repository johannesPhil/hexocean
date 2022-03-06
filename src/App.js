import { useState } from "react";
import "./App.css";

import RecipeForm from "./components/RecipeForm";
import SuccessModal from "./components/SuccessModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorResponse, setErrorResponse] = useState(false);

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <div className="media"></div>
          <RecipeForm
            setShowModal={setShowModal}
            setSuccess={setSuccess}
            setLoading={setLoading}
            setErrorResponse={setErrorResponse}
          />
          {showModal && (
            <SuccessModal
              setShowModal={setShowModal}
              loading={loading}
              success={success}
              errorResponse={errorResponse}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
