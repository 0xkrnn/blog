import React from 'react';
import Navbar from '../components/Navbar';
import bg from "../assets/images/bg.jpg"
import Footer from '../components/Footer';

function Home() {
    return (
        <div className='home-container'>
            <Navbar />
            <div className='header'>
                <h1>byte</h1>
                <h1>insightful</h1>
                <h1>blogs</h1>
                <p>Indulge in a digital symphony of captivating content, where every click unveils a world of inspiration and knowledge.</p>
            </div>
            <div className='image-container'>
                <div className='rounded-container'>
                    <p>unveiling the knowledge</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;