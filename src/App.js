import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Rightnav from "./components/Rightnav";
import Sidenav from "./components/Sidenav";
import './components/App.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidenav/>
      <MainPage/>
      <Rightnav/>
    </div>
  );
}

export default App;
