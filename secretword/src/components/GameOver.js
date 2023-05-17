import "./GameOver.css";

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>A tua pontuação foi: <span>{score}</span> </h2>
      <button onClick={retry}>Iniciar jogo</button>
    </div>
  )
}

export default GameOver