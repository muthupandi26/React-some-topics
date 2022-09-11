import { useState, useEffect } from "react";
import BlockList from "./BlockList";
import useFetch from "./useFetch";

const HomeNew = () => {
    
    const { data : blogs, pending, error } = useFetch('http://localhost:8000/blogs');

    const [check, setCheck] = useState("mario");



    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {pending && <div>Loading.....</div>}
            { blogs && <BlockList blogs = {blogs} title = {"hey props"} />}
            <button onClick={() => setCheck("hey mario..")}>Change check value</button>
            <p>{ check }</p>
        </div>
    );
        

}
    
export default HomeNew;