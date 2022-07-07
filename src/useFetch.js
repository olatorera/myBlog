import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    const getBlogs = async () =>{
      const data = await (await fetch("https://glacial-mesa-42530.herokuapp.com/api/blogs")).json();
if(Array.isArray(data)){
          setData(data);
        setIsPending(false);
        setError(null);
    }else{
        setIsPending(false);
        setError('err.message');
    }
  }
    useEffect(() => {
      getBlogs();
      // .then(res => {
      //   if (!res.ok) {
      //     throw Error('could not fetch data for that resource');
      //   }
      //   return res.json();
      // })
      // .then(data => {
      //   console.log(data)
      //   setBlogs(data);
      //   setIsPending(false);
      //   setError(null);
      // })
      // .catch(err => {
      //   setIsPending(false);
      //   setError(err.message);
      // }) 
    }, [url]);
  return [data, isPending, error];
}

export default useFetch