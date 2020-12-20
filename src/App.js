import logo from './logo.svg';
// import './App.css';
import Header from "./shared/header";
import LiborData from "./components/libordata";
function App() {
  return (
    <div className="App">
       <Header/>
       <br/>
       <LiborData/>
    </div>
  );
}

export default App;
