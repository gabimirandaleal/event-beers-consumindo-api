import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import ItemProdutoCarrinho from "../../Components/ItemProdutoCarrinho";
import { Div } from "./style";

function Casamento() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        setProdutos(JSON.parse(localStorage.getItem(`@Event-Beers:Casamento`)))
    }, [])

    return (
        <>
          <Header></Header>
          <Div>
            {produtos && produtos.map((item) => (
              <ItemProdutoCarrinho setProdutos={setProdutos} produtos={produtos} text="Casamento" key={item.id} product={item}></ItemProdutoCarrinho>
            ))}
          </Div>

        </>
      );
}

export default Casamento;