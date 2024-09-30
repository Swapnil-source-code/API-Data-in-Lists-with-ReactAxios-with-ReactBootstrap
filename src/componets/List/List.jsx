import  { useState, useEffect } from 'react'
import '../List/List-style.css'
import axios from 'axios';

const List = () => {

  const [post, setpost] = useState([]);

  const fetchData = async()=>{
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
      console.log(res);
      setpost(res.data)
    }
    catch(err) {
      console.log(err);
    }
  }
  useEffect(()  => {
    fetchData()
  }, [])
  
  return (
    <>
      <div style={{width:'20rem', margin:'auto'}}>
      {post.map((index, value) => (
        // <ul key={value}>
        //   <li key={value}>{post[value]["title"] }</li>
        // </ul>
        <ul className="list-group" key={value}>
          <li className="list-group-item" key={value}>{`${post[value]['id']} ${post[value]["title"]}`}</li>
        </ul>
      ))}
      </div>
    </>
  )
}

export default List