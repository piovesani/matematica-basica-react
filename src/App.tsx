import { Header } from "./components/Header";
import { Matematica } from "./components/Matematica";


const App = () => {

  return(
    <div>
      <Header titulo="Aritmética básica no React"/>
      <br/>
      <Matematica titulo="A soma de " n1={50} n2={10} operador="+"/>
      <Matematica titulo="A divisão" n1={50} n2={10} operador="-"/>
      <Matematica titulo="Multiplicação de " n1={50} n2={10} operador="x"/>
      <Matematica titulo="Divisão de " n1={50} n2={10} operador="/"/>
    </div>
    
  );
}

export default App;
