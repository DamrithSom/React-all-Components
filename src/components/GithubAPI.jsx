import React, { useEffect, useState } from "react";

const GithubAPI = () => {
  const urlAPI = "https://api.github.com/users";
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetch(urlAPI);
        const Response = await responseData.json();
        setData(Response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
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