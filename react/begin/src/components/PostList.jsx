import React from 'react';
import PostItem from "./PostItem";
import MyButton from './UI/button/MyButton';
// в одном компоненте один корневой элемент (например, div)
const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post) =>
                <PostItem post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;