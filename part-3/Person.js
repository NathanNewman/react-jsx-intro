function Person(props) {
  const name = props.name.length < 8 ? props.name : props.name.slice(0, 6);
  console.log(props.name.length);
  const voteText = props.age >= 18 ? "please go vote!" : "you must be 18";
  const hobbies = props.hobbies.map((hobby) => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some more information about this person</p>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {props.age}</li>
        <li>{voteText}</li>
        <ul>
            Hobbies
            {hobbies}
        </ul>
      </ul>
    </div>
  );
}
