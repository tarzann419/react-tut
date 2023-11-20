import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        // an arrya of blogs
        { title: 'Eat and sleep', body: 'The man who ate before sleeping...', author: 'Dan', id: 1 },
        { title: 'Love is inevitable', body: 'Widow and homeless...', author: 'Michael Morales', id: 2 },
        { title: 'Cake and Lovers', body: 'The white and barren...', author: 'Dan', id: 3 }
    ]);

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlog = blogs.filter( blog => blog.id !== id )
        setBlogs(newBlog);
    } 

// runs everytime there is a re-render
    useEffect(() => {
        console.log('use effect run')
    }, [name]);


    return (  
        <div className="home">
            {/* using tghe first method to using props */}
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            {/* filtering */}
            {/* <BlogList blogs={blogs.filter( (blog) => blog.author === 'Dan' )} title="Dan's Blogs" /> */}
            <button onClick={() => {setName('luigi')}} >change state</button>
            <p>{ name }</p>
        </div>
     );
}
 
export default Home;