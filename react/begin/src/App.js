import React, { useState } from 'react';
import Counter from "./components/Counter"
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';

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
  //для каждого поста в массиве отрисовываем PostItem, как пропс передаём объект
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Название поста"/>
        <input type="text" placeholder="Описание поста"/>
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;
