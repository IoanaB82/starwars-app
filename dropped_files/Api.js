import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Api() {
    const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
 

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    axios.get("https://swapi.dev/api/")
       .then(res => {
            const items = res.data;
            setData(items);  
         }
        )
  }, [])

  return data;
};

export default Api;