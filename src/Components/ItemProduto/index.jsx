import padrao from "../../assets/img/padrao.png"
import Buttons from "../Button";
import {Div, DivCard} from "./style"

function ItemProduto({product, setPopup, recebeProduto}) {

    function handleAdd(product) {
        setPopup(true)
        recebeProduto(product)
    }
    
    return(
        <Div>
            <DivCard>
                <img src={product.image_url ? product.image_url : padrao} alt={product.name} />
                <h3>{product.name}</h3>
                <span>Fabricado em: {product.first_brewed}</span>
                <span>Descrição: {product.description}</span>
                <span>Quantidade de litros: {product.volume.value}</span>
            </DivCard>
            <Buttons onclick={() => handleAdd(product)} text={"Adicionar Produto"}></Buttons>
        </Div>
    )
}

export default ItemProduto;