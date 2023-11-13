const Home = () => {

    const helloWorld = () => {
        console.log('Hello, world!')
    }
    
    const helloWorldAgain = (name) => {
        console.log('Hello, ' + name + '!')
    }

    return ( 
        <div className="home">
            <h1>This is the Home Page</h1>
            <button onClick={helloWorld}>click me</button>
            <button onClick={ () => helloWorldAgain('mario') }>click me again</button>
        </div>
     );
}
 
export default Home;