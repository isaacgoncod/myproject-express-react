import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";

function App() {
  const nome = "Welli";
  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <SayMyName nome="Isaac" />
      <SayMyName nome="Gustavo" />
      <SayMyName nome="Bruno" />
      <SayMyName nome={nome} />
      <Pessoa nome="Isaac" idade="21" profissao="Programador" />
    </div>
  );
}

export default App;
