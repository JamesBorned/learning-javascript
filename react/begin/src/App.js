import React, { useState } from 'react';
import Counter from "./components/Counter"
import ClassCounter from './components/ClassCounter';

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
      <ClassCounter/>
    </div>
  );
}

export default App;
