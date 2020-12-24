import logo from './logo.svg';
// import './App.css';
import Header from "./shared/header";
import LiborData from "./components/libordata";

//this is the home page or our default landing page.
function App() {
  return (
    <div className="App">
       <Header/>              // the header component is used here.
       <br/>
       <LiborData/>
    </div>
  );
}

export default App;
