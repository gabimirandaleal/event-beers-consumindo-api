import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import ItemProdutoCarrinho from "../../Components/ItemProdutoCarrinho";
import { Div } from "./style";

function Formatura() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        setProdutos(JSON.parse(localStorage.getItem(`@Event-Beers:Formatura`)))
    }, [])

    return (
        <>
          <Header></Header>
          <Div>
            {produtos && produtos.map((item) => (
              <ItemProdutoCarrinho setProdutos={setProdutos} produtos={produtos} text="Formatura" key={item.id} product={item}></ItemProdutoCarrinho>
            ))}
          </Div>

        </>
      );
}

export default Formatura;