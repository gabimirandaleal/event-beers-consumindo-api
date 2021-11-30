import padrao from "../../assets/img/padrao.png"
import Buttons from "../Button";
import {Div, DivCard} from "./style"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemProdutoCarrinho({product, text, setProdutos, produtos}) {

    function handleAdd(produto) {
        setProdutos(produtos.filter((item) => item.id !== produto.id))
        localStorage.setItem(`@Event-Beers:${text}`, JSON.stringify(JSON.parse(localStorage.getItem(`@Event-Beers:${text}`)).filter((item)=>item.id !== produto.id)));
        toast.success(`${produto.name} removido com sucesso`, {
            position: "top-right",
            autoClose: 1200,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
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
            <Buttons onclick={() => handleAdd(product)} text={"Remover Produto"}></Buttons>
        </Div>
    )
}

export default ItemProdutoCarrinho;