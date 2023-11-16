import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        // an arrya of blogs
        { title: 'Eat and sleep', body: 'The man who ate before sleeping...', author: 'Dan', id: 1 },
        { title: 'Love is inevitable', body: 'Widow and homeless...', author: 'Michael Morales', id: 2 },
        { title: 'Cake and Lovers', body: 'The white and barren...', author: 'Anthony Columbus', id: 3 }
    ]);

    return (  
        <div className="home">
            {/* for blog in blogs. so we'll use 'blog' to loop through */}
            { blogs.map( (blog) => (
                // never forget to add the key property
                // the key property helps react to keep track of each item renedered to the DOM
                <div className="blog-preview" key={blog.id}>
                    <h1> Title: { blog.title } </h1>
                    <p> Written by: { blog.author } </p>
                </div>
            ) ) }
        </div>
     );
}
 
export default Home;