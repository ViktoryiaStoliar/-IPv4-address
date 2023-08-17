import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [data, setData] = useState([]);
  const [age, setAge]  = useState(''); 

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  async function sendRequest() {
    const response = await axios.get("https://www.nbrb.by/API/ExRates/Currencies");
    console.log(response.data);
    setData(response.data)
  }

  useEffect(() => { sendRequest() })

  return (
    <div className="App">

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {data.map((el, index) => <MenuItem key={index} value={el.Cur_Name}>{el.Cur_Name}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}

export default App;
