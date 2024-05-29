import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import { HashRouter as Router } from 'react-router-dom';


function App() {
  return (
     <Router>
      <Navbar />
      <Main />
    </Router>
  );
}

export default App;
