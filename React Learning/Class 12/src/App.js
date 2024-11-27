import './App.css';

function App() {

  const team = ["LQ", "IU" ,"PZ", "KK", "MS", "QG", "LQ", "IU"];
  const psl = team.map((params, index) => <h1 key={index}>key is {index} {params}</h1>)
  return (
    <>

      {/* {team}

      {team[0]}
      {team[1]}
      {team[2]}
      {team[3]}
      {team[4]}
      {team[5]} */}

<h1>{psl}</h1>

    </>
  );
}

export default App;
