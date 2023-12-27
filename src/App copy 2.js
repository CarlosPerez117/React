import './main.css';
import Button from './Button';

const Arr = ["Hola","adios","pito"]
function App() {
  const miVariable = true;
  if(!miVariable) {
    return (
      <h1>Mi variable dio true</h1>
    )
  }
  return (
    <div>
      <h1 onClick={(e/*evento-parametros que recive*/) => console.log("click",e)}>Hola mundo!</h1>
      {Arr.map((el,i) => <p key={i} >{el}</p>)}
      <Button onClick={(e) => console.log("Cliqueado",e)}>
        Enviar
      </Button>
    </div>
  );
}

export default App;
