import ListaProdutos from "./Modulos/ListaProduto/ListaProdutos";
import RodaPe from "./Modulos/RodaPe/rodaPe";
import FitroCategoria from "./Modulos/FiltroCategoria/FitroCategoria";
import style from "./App.module.scss"


function App() {
  return (
    <>
      <div className={style.BlocoGeral}>
        <FitroCategoria />
        <ListaProdutos />
        <RodaPe />
      </div>
    </>
  );
}

export default App;
