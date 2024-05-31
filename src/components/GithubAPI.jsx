import React, { useEffect, useState } from "react";
import axios from 'axios'
const GithubAPI = () => {
  const urlAPI = "https://api.github.com/users";
  const [data, setData] = useState([]);
  const [isLoading , setIsloading] = React.useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const responseData = await fetch(urlAPI);
        // const Response = await responseData.json();
        // setData(Response);

        const response = await axios(urlAPI)
        const data = response.data;
        setData(data)
        console.log(data)
      } catch (error) {
        console.log(error.status);
      }
    };
    setIsloading(false)
    fetchData();
  }, []);
  if(isLoading)
    {
      return <h2 className="text-3xl text-blue-700 flex justify-center items-center min-h-screen">Loading ...</h2>
    }
 
  return (
    
    <>
  
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-4 w-5/6 m-auto">
        {data.map((user) => {
          const { id, avatar_url, html_url, login } = user;
          return (
            <article
              key={id}
              className="bg-white rounded-lg shadow-md overflow-hidden p-4 flex flex-col items-center"
            >
              <img
                className="w-24 h-24 rounded-full mb-4"
                src={avatar_url}
                alt={login}
              />
              <h3 className="text-xl font-serif mb-2">{login}</h3>
              <a className="text-blue-500 hover:text-blue-700" href={html_url}>
                {" "}
                See Profile
              </a>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default GithubAPI;
