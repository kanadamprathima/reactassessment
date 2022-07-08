// const HousePage = () => {
//   return <p> This is for housedetails page </p>;
// };

//export default HousePage;
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function HouseDetailsPage() {
  const routeParams = useParams();
  const [characters, setcharacters] = useState(null);

  useEffect(async () => {
    async function getHouseDetails() {
      const Response = await axios.get(
        `https://hp-assessment-api.herokuapp.com/hp/house/:id `
      );
      setcharacters(Response.data);
    }
    getHouseDetails();
  }, []);

  return {};
}
export default HouseDetailsPage;
