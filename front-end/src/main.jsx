import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import Post from './contexts/Post.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Post>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Post>
)
