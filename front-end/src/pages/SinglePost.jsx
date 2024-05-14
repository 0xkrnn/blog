import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postContext } from '../contexts/Post';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bg2 from "../assets/images/card3.png"

function SinglePost() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const { id } = useParams()
    const { posts, setSearch } = useContext(postContext)

    const post = posts.posts.find((item) => {
        return item.id == id
    })

    const naviagte = useNavigate()

    const onTagClick = async (tag) => {
        await setSearch(tag)
        naviagte("/blogs")
    }

    return (
        <div>
            <Navbar />
            <div className='single__post__container'>
                <img src={bg2} alt={post.title} />
                <h1>{post.title}</h1>
                <p>{post.body} {post.body} {post.body} {post.body} <br />  <br />{post.body}{post.body}{post.body}</p>
                <section className='tag__section'>
                    <h4> Tags </h4>
                    <ul>
                        {
                            post.tags.map(tag => {
                                return <li key={tag} onClick={() => onTagClick(tag)}> {tag} </li>
                            })
                        }
                    </ul>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default SinglePost;