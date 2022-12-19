import React, { useState, useEffect } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/App.css';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService'
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';

function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll();
        setPosts(response.data);
        setTotalCount(response.headers['x-total-count'])
        console.log(response.headers['x-total-count']);
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{ margin: '15px 0' }} />
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <div><h1 style={{ textAlign: 'center' }}>Произошла ошибка</h1><h1 style={{ textAlign: 'center' }}>${postError}</h1></div>
            }
            {isPostsLoading
                ? <h1 style={{ textAlign: 'center' }}>Загрузка постов... <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div></h1>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты бложика" />
            }

        </div>
    );
}

export default App;
