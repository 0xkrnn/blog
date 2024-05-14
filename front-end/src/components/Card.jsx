import React, { useEffect, useState } from 'react';
import card1 from "../assets/images/card1.png"
import { useNavigate } from 'react-router-dom';


function Card({ post }) {

    const naviagte = useNavigate()

    const onPostClick = () => {
        naviagte(`/blogs/${post.id}`)
    }

    return (
        <div className='card'>
            <img
                src={card1}
                alt={post.title}
                onClick={() => onPostClick()}
            />
            <h3 className='card-head' onClick={() => onPostClick()}> {post.title} </h3>
            <p className='card-body'> {`${post.body.slice(0, 200)}...`} </p>
            <div className='card-info'>
                <h6 className='card-author'> Author - <span className='card-data'> 06/1/2009 </span> </h6>
            </div>
        </div>
    );
}

export default Card;