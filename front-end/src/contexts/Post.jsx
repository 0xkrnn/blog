import React, { useEffect, useState } from 'react';

export const postContext = React.createContext()

function Post({ children }) {

    const [posts, setPosts] = useState(null)
    const [total, setTotal] = useState(0)
    const [search, setSearch] = useState("")

    const getAllposts = async () => {
        const result = await fetch('https://dummyjson.com/posts')
        const data = await result.json()
        setPosts(data)
        posts ? setTotal(10) : null
    }

    useEffect(() => {
        getAllposts()
    }, [])

    return (
        <postContext.Provider value={{ posts, total, search, setSearch }}>
            {children}
        </postContext.Provider>
    );
}

export default Post;