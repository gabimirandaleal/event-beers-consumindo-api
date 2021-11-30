import {NativeSelect, InputLabel} from "@mui/material"
import Buttons from "../Button"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {Error, Div, Form, DivA, DivContainer} from "./style"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PopupAddEvent({setPopup, produtoClicado}) {
 
    const formSchema = yup.object().shape({
        category: yup.string().required("Categoria obrigatória")
    })

    const { register, 
        handleSubmit, 
        formState: { errors },
    } = useForm({
        resolver:yupResolver(formSchema),
    })

    const onSubmitFunction = data => {
        setPopup(false)
        if(localStorage.getItem(`@Event-Beers:${data.category}`) === null){
            localStorage.setItem(`@Event-Beers:${data.category}`, JSON.stringify([produtoClicado]));
            toast.success(`${produtoClicado.name} foi adicionado`, {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        }else{
            if(JSON.parse(localStorage.getItem(`@Event-Beers:${data.category}`)).filter((item) => item.id === produtoClicado.id).length === 0){
                localStorage.setItem(`@Event-Beers:${data.category}`, JSON.stringify([...JSON.parse(localStorage.getItem(`@Event-Beers:${data.category}`)), produtoClicado]));
                toast.success(`${produtoClicado.name} foi adicionado`, {
                    position: "top-right",
                    autoClose: 1200,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    })
            }else{
                toast.error("Produto já foi adicionado anteriormente", {
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
        }
    }

    return(
        <DivA>
            <DivContainer> 
                <span onClick={() => setPopup(false)}>x</span>
                <Div>
                    <Form onSubmit={handleSubmit(onSubmitFunction)}>
                        <h3>Bebida: {produtoClicado.name}</h3>
                        <InputLabel htmlFor="select">Selecionar o evento:</InputLabel>
                        <NativeSelect {...register("category")} fullWidth id="select" >
                            <option defaultValue={(event) => event.target.value}>Formatura</option>
                            <option defaultValue={(event) => event.target.value}>Casamento</option>
                            <option defaultValue={(event) => event.target.value}>Confraternização</option>
                        </NativeSelect>
                        <Error margin="5">
                            {
                            errors.category?.message.split(";").map((item)=>(
                                <li>
                                {item}
                                </li>
                            ))
                            }
                        </Error>
                        <Buttons type="submit" text={"Adicionar ao evento"}></Buttons>
                    </Form>     
                </Div>
            </DivContainer>
        </DivA>
    )
}

export default PopupAddEvent;