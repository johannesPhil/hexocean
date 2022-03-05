import "./App.css";

import RecipeForm from "./components/RecipeForm";
import video from "./assets/shortvid.mp4";

function App() {
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <div className="media">
            <video
              autoPlay
              loop
              muted
              className="video"
              width="100%"
              height="100%"
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <RecipeForm />
        </div>
      </div>
    </>
  );
}

export default App;
