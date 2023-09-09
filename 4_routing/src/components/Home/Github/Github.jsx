import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/RAHUL956777")
  //       .then((responce) => responce.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 text-white bg-gray-600 p-4 text-3xl flex flex-col items-center rounded-lg">
      Followers: {data.followers}
      <img
        src={data.avatar_url}
        alt="github-image"
        width={300}
        className="p-4"
      />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/RAHUL956777");
  return response.json();
};

