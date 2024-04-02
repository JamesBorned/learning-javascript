import React, { useState, useRef } from 'react';
import Counter from "./components/Counter"
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  // let likes = 0;

  // function increment() {
  //   likes += 1;
  //   console.log(likes);
  // }
  // const [likes, setLikes] = useState(0) //состояние, функция
  // const [value, setValue] = useState('TEXT IN INPUT')

  //console.log(setLikes)
  // array of objects в массив react-элементов? (с помощью map)
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
  ])
// управляемый инпут (получить доступ из инпута)
  const [title, setTitle] = useState('')
// получаем доступ к DOM элементу
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(bodyInputRef.current.value)
  }

  //для каждого поста в массиве отрисовываем PostItem, как пропс передаём объект
  return (
    <div className="App">
      <form>
        {/*Управляемый инпут*/}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Описание поста"/>
        {/*Неуправляемый инпут*/}
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Описание поста"/>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;
