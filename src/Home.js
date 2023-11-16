import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(77);
    const helloWorld = () => {
        setName('luigi');
        setAge(34)
    }
    
    // const helloWorldAgain = (name) => {
    //     console.log('Hello, ' + name + '!')
    // }

    return (  
        <div className="home">
            <h1>This is the Home Page</h1>
            <p> { name } is { age } years old </p>
            <button onClick={helloWorld}>click me</button>
            {/* <button onClick={ () => helloWorldAgain('mario') }>click me again</button> */}
        </div>
     );
}
 
export default Home;