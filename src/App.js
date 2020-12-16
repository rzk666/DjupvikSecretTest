import { useEffect, useState } from 'react';
import Norway from './Norway.gif';
import Wange from './wanga.jpg';
import './App.css';

function App() {
  const [show, toggle] = useState(false);
  useEffect(() => {
    if (!show){
      setTimeout(() => toggle(true), 3000);
    }
  }, [])
  return (
    <div className="App">
        <img className="flag" src={Norway}/>
        <img className="wanga" src={Wange}/>
        <div style={show ? {opacity: 0.7} : {opacity: 0}} onClick={() => alert('You must enter WoW with Rozadin for Norway.')} className='btn'>
          SECRET MESSAGE FROM DJUPVIK
        </div>
    </div>
  );
}

export default App;
