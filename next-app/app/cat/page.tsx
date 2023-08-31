"use client";
import React, { useEffect, useState } from "react";

interface factsProps {
  _id: string;
  user: string;
  text: string;
  type: string;
}

const CatFacts = () => {
  const [facts, setFacts] = useState<factsProps[]>([]);
  useEffect(() => {
    async function getFacts() {
      const res = await fetch("/api");
      const result = await res.json();

      setFacts(res.ok ? result : []);
    }

    getFacts();
  }, []);
  return (
    <div className="flex justify-center items-center p-10">
      <ul>
        {facts.map((fact) => (
          <li key={fact._id}>
            {fact.type.toUpperCase()}: {fact.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatFacts;
