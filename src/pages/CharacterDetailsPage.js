// API endpoint: [ https://hp-assessment-api.herokuapp.com/hp/character/:id ]

// A character is displayed with all its available information
// The data is fetched from the API, not hardcoded
// Params are used to get the character id
import { useState, useEffect } from "react";
import axios from "axios";
//import CharacterBlock from "../components/CharacterBlock";

const AllCharactersId = (id) => {
  const [char, setChar] = useState([]);
  useEffect(
    (id) => {
      const getCharactersId = async () => {
        const response = await axios.get(
          "https://hp-assessment-api.herokuapp.com/hp/character/:id"
        );
        console.log(response.data);
        setChar(response.data);
      };
      getCharactersId(id);
    },
    [id]
  );

  return (
    <div>
      <h1>Getting characters by id</h1>
      {char.filter((user) => {
        return id === user.id;
      })}
    </div>
  );
};
export default AllCharactersId;
