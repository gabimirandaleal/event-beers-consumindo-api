import ItemProduto from "../../Components/ItemProduto";
import { ProductContext } from "../../Providers/Product";
import { useContext, useState } from "react";
import { Div, DivButtons } from "./style";
import Header from "../../Components/Header";
import Buttons from "../../Components/Button";
import PopupAddEvent from "../../Components/PopupAddEvent";

function Initial() {
  const { product, nextPage, previousPage } = useContext(ProductContext);
  const [popup, setPopup] = useState(false)
  const [produtoClicado, setProdutoClicado] = useState({})

  function recebeProduto(produto) {
    setProdutoClicado(produto)
  }

  return (
    <>
      {popup && <PopupAddEvent produtoClicado={produtoClicado} setPopup={setPopup}/>}
      <Header></Header>
      <Div>
        {product.map((item) => (
          <ItemProduto recebeProduto={recebeProduto} key={item.id} product={item} setPopup={setPopup}></ItemProduto>
        ))}
      </Div>
      <DivButtons>
        <Buttons width={"true"} onclick={previousPage} text={"Anterior"}></Buttons>
        <Buttons width={"true"} onclick={nextPage} text={"Proximo"}></Buttons>
      </DivButtons>
    </>
  );
}

export default Initial;
