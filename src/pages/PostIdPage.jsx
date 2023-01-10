import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComment, isCommentLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComment(params.id)
    }, [])

    return (
        <div className='individual__post'>

            {isLoading
                ? <div>
                    <h1>Пост {params.id}</h1> <Loader />
                </div>
                : <div>
                    <h2>{post.title}</h2>
                    <div style={{ marginTop: 25 }}>{post.body}</div>
                </div>
            }
            <h3 style={{ marginTop: 25 }}>
                Comments
            </h3>
            {isCommentLoading
                ? <Loader />
                : <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '50%' }}>
                    {comments.map(comm =>
                        <div style={{ marginTop: 20 }}>
                            <h5 style={{ color: 'lightblue', cursor: 'pointer' }}>{comm.email}</h5>
                            <div style={{ marginTop: 3 }}>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostIdPage
