import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
// import { response } from 'msw';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState()
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const GetCharacter = (()=> {
  
    axios.get(`https://swapi.dev/api/people`)
    .then(response => {
      console.log("response: ", response)
      setCharacter(Object.values(response.data))
      console.log(Object.values(response.data));
    })
    .catch(err => {console.log(err)})
    useEffect(() =>{GetCharacter()
      console.log(character)
  })
})
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
  
}
export default App;
