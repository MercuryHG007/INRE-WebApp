import './App.css';
import Nav from './components/Navbar'
import Foot from './components/Footer'
import Main from './sections/Main';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Foot />
    </div>
  );
}

export default App;
