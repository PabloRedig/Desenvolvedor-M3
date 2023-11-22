import Cabecalho from "./Modulos/Cabecalho/cabecalho";
import ListaProdutos from "./Modulos/ListaProduto/ListaProdutos";
import RodaPe from "./Modulos/RodaPe/rodaPe";
import FitroCategoria from "./Modulos/FiltroCategoria/FitroCategoria";


function App() {
  return (
    <>
      <FitroCategoria />
      <ListaProdutos />
      <RodaPe />  
    </>
  );
}

export default App;
