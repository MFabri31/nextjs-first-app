import Link from "next/link";
import CharacterCard from "./components/CharacterCard";

export default async function Home() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();

  console.log(data);

  const characters = data.results?.map((character) => {
    return (
      <Link href={`/${character.id}`} key={character.id}>
        <CharacterCard id={character.id} {...character} />
      </Link>
    );
  });

  return (
    <main className="container mx-auto py-5">
      <header className="py-5">
        <h1 className="text-2xl text-center  font-semibold uppercase">
          List of Characters
        </h1>
      </header>

      <div className="grid grid-cols-4 gap-8">{characters}</div>
    </main>
  );
}
