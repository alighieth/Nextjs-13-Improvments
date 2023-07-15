async function getPosts() {
  const res = await fetch("https://catfact.ninja/facts", {
    next: { revalidate: 5 },
  });

  console.log("====================================");
  console.log("Revalidating");
  console.log("====================================");

  if (res.ok) return res.json();
}

export default async function About() {
  let facts = await getPosts();

  facts = facts.data;
  return (
    <>
      <ol>
        {facts.map((fact, index) => (
          <li key={index} style={{ color: "purple" }}>
            {fact.fact}
          </li>
        ))}
      </ol>
    </>
  );
}
