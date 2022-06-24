import "./App.css";
import NavBar from "./Components/NavBar";
import Shop from "./Components/Shop";

//https://www.geeksforgeeks.org/introduction-to-redux-action-reducers-and-store/
//https://www.geeksforgeeks.org/introduction-to-react-redux/

function App() {
  return (
    <div className="App">
      <NavBar />
      <Shop />
    </div>
  );
}

export default App;
