
import {Navbar} from './components/Navbar/Navbar.js'
import {Calculator} from './components/Calculator.js'
import {Convertisseur} from './components/Convertisseur.js'
import {Weather} from './components/Weather.js'
import './App.css';


function App() {
  return (
    <div>
          <Navbar />
          <Calculator />
          <Convertisseur />
          <Weather />
    </div>
  )
}

export default App;