import { createRoot } from "react-dom/client";
<<<<<<< Updated upstream
=======
import { MainView } from "./components/main-view/main-view.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';


>>>>>>> Stashed changes
// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";
import { Container } from "react-bootstrap";

// Main component (will eventually use all the others)
const MovieBeeApp = () => {
<<<<<<< Updated upstream

  return (
    <div className ="movie-bee">
      <div> Welcome to Movie Bee Application!</div>
    </div>
  )

=======
  return (
  <Container >
    <MainView />
  </Container> 
  );
>>>>>>> Stashed changes
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MovieBeeApp />);

