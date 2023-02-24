import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  const nome = "Welli";
  return (
    <div className="App">
      <SayMyName nome="Isaac" />
      <SayMyName nome="Gustavo" />
      <SayMyName nome="Bruno" />
      <SayMyName nome={nome} />
      <Pessoa nome="Isaac" idade="21" profissao="Programador" />
    </div>
  );
}

export default App;
