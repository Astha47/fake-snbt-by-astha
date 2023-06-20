import Form from './components/Input';
import Pengumuman from './components/Pengumuman';
//import './App.css';
import { useState } from 'react';

function App() {
  
  const [hasil, setHasil] = useState(false)
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [university, setUniversity] = useState('');
  const [major, setMajor] = useState('');

  let display;

  if (hasil) {
    display = <Pengumuman name={name} birthdate={birthdate} university={university} major={major} setHasil={setHasil}/>
    
  } else {
    display = <Form setHasil={setHasil} setName={setName} setBirthdate={setBirthdate} setUniversity={setUniversity} setMajor={setMajor} />
  }


  return (
    <div className="App">
      {display}
    </div>
  );
}

export default App;
