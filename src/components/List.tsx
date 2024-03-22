import { useEffect, useState } from "react"
import { Character, CharacterProps } from "./Character";

export const List = () => {

    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://rickandmortyapi.com/api/character');
            const { results } = await data.json();
            setCharacters(results);
            setLoading(false);
        }
        fetchData()
    }, [characters.length])

    return (
        <div>
            <p className="text-3xl font-bold">Characters</p>
            <div className="grid grid-cols-4">
                {loading ? (
                    <div>Loading...</div>)
                    :
                    (characters.map((character: CharacterProps) => (
                        <Character
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            image={character.image}
                            origin={character.origin}
                        />
                    )))
                }
            </div>
        </div>
    )
}