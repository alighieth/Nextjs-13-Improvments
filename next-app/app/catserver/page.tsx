import React from "react";

interface factsProps {
  _id: string;
  user: string;
  text: string;
  type: string;
}

const Home = async () => {
  const catFactsResponse = await fetch("https://cat-fact.herokuapp.com/facts");
  const catFactsResult: factsProps[] = await catFactsResponse.json();

  return (
    <div className="flex justify-center items-center p-10">
      <ul>
        {catFactsResult.map((fact) => (
          <li key={fact._id}>
            {fact.type.toUpperCase()}: {fact.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
