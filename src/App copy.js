import logo from './logo.svg';
//import './App.css';
import "./main.css"; 

function App() {
  //estilos
  const estilo = ({BG = "#456"}) => ({
    backgroundColor: BG,
    color: "#fff",
    padding: "10px 15px",
    margin: "10px 15px",
  })

  const estilo2 = () => ({
    boxShadow: "0 5px 3px black"
  })

  //contenido
  function Li({ children }) {
    return (
      <li style={{...estilo2(),...estilo({BG:"#459"})}} className="clase-li" >{children}</li>
    )
  }
  const valor = 'feliz'
  return (
    <ul style={estilo({BG:"#457"})} className="clase-css">
      <Li estado="feliz">valor de Li</Li>
      <li estado="feliz">valor de Li</li>
    </ul>
  );
}

export default App;
