import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import { HashRouter as Router } from 'react-router-dom';
import Footer from './Components/Footer';


function App() {
  return (
     <Router>
      <Navbar />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
