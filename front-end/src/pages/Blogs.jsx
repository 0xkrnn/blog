import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { postContext } from '../contexts/Post';
import Searchbar from '../components/Searchbar';

function Blogs() {

    const { posts, total, search } = useContext(postContext);
    const [page, setPage] = useState(1)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])

    return (
        <div className='blog-container'>
            <Navbar >
                <Searchbar />
            </Navbar>
            <div className='blogs'>
                {
                    posts
                        ? search
                            ? posts.posts
                                .filter(post => post.tags.some(tag => tag.includes(search)))
                                .map(post => <Card post={post} key={post.id} />)
                            : posts.posts.slice(page * 9 - 9, page * 9).map((post) => {
                                return (
                                    <Card post={post} key={post.id} />
                                )
                            })
                        : <h1 className='empty__container'> Nothing to show </h1>
                }
            </div>

            <div className='pagination__container'>

                {page != 1
                    ? <button className='pagination__button' onClick={() => setPage(page - 1)}> previous </button>
                    : null
                }
                <button className='pagination__button'> {page} </button>
                <button className='pagination__button' onClick={() => setPage(page + 1)}> {page + 1} </button>


            </div>

            <Footer />
        </div>
    );
}

export default Blogs;