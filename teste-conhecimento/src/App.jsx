import ListaProdutos from "./ListaProdutos";
import Imagen from "./img/img_2.png"
function App() {
  return (
    <>
      <div>
        <img src={Imagen} alt="teste"/>
      </div>
      <ListaProdutos />
    </>
  );
}

export default App;
