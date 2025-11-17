import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState({});

  //   useEffect(() => {
  //     fetch(" https://api.github.com/Waqar-Ahmad76")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center text-white bg-blue-950 m-4 p-4 text-3xl rounded-2xl">
      GitHub followers: {data.followers}
      <img src={data.avatar_url} alt="avatar" className="w-2xs" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/Waqar-Ahmad76");
  return res.json();
};
