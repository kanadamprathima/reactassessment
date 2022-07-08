export default function CharacterBlock(props) {
  return (
    <div className="list">
      <img
        src={"https://hp-assessment-api.herokuapp.com/hp/characters"}
        alt="pic"
      ></img>
      <h3>{props.name}</h3>
      <h5>{props.born}</h5>
      <p>{props.house}</p>
      <p>{props.id}</p>
      <br />
      <button>read more..</button>

      <br />
    </div>
  );
}
