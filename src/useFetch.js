import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [pending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(url)
        .then( res => {
            if(!res.ok) {
                throw Error('could not get data from that resource');
            }
            return res.json();
        })
        .then( data => {
            // console.log(data);
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch( err => {
            setIsPending(false);
            setError(err.message);
        })
    }, [url]);

    return { data, pending, error }
}

export default useFetch;