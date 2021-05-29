import Navbar from "./components/navbar/navbar";
import Main from "./components/main/main"
import Info from "./components/info/info"
import "./app.scss"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Info />
    </div>
  );
}

export default App;
