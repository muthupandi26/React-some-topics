import { useState } from "react";
const Home = () => {
    
    const [initialValue, setNewName] = useState("hey first");
    const [initialAge, setNewAge] = useState(26);

    const handleClick = () => {     
        setNewName(" i am new name");
        setNewAge(50);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>clickme</button>
            <p> {initialValue} and his age {initialAge} </p>

        </div>
    );
}
 
export default Home;