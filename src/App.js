import "./App.css";
import HelloWorld from "./components/HelloWorld";

function App() {
  const name = "Matheus";

  const newName = name.toUpperCase();

  function soma(a, b) {
    return a + b;
  }

  const url = "https://via.placeholder.com/150";

  return (
    <div className="App">
      <h1>Alterando JSX</h1>
      <p>Olá, {newName}</p>
      <p>soma: {soma(1, 2)}</p>
      <img src={url} alt="Minha Imagem" />
      <HelloWorld />
    </div>
  );
}

export default App;
