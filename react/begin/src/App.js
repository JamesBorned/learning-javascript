import React, { useState } from 'react';
import Counter from "./components/Counter"

function App() {
  // let likes = 0;

  // function increment() {
  //   likes += 1;
  //   console.log(likes);
  // }
  // const [likes, setLikes] = useState(0) //состояние, функция
  // const [value, setValue] = useState('TEXT IN INPUT')

  //console.log(setLikes)

  return (
    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
