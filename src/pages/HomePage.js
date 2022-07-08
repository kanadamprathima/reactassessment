import { useState, useEffect } from "react";
import axios from "axios";
import CharacterBlock from "../components/CharacterBlock";

const AllCharacters = () => {
  const [char, setChar] = useState([]);
  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(
        "https://hp-assessment-api.herokuapp.com/hp/characters"
      );
      console.log(response.data);
      setChar(response.data);
    };
    getCharacters();
  }, []);

  return (
    <div>
      <h1>Character List</h1>
      {char.map((c) => (
        <CharacterBlock
          id={c.id}
          imgUrl={c.imgUrl}
          name={c.name}
          born={c.born}
        />
      ))}
    </div>
  );
};
export default AllCharacters;
