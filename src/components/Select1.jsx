import React,{useEffect,useState} from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import { Box, InputLabel, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';



export default function Select1({currencies,onChange , value}) {
 
  
 
 
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          type="number" 
          placeholder="0"
          label="Age"
          onChange={onChange}
        >
          {currencies.map((currency => (
          <option style={{
            color:'black'
          }} value={currency}>{currency}</option>
        )))}
        </Select>
      </FormControl>
    </Box>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
