import {Ul} from "./style"
import {useHistory} from "react-router-dom"

function Nav({open}) {
    const history = useHistory();
    return (
        <Ul open={open}>
                <li onClick={() => history.push("/")}>Produtos</li>
                <li onClick={() => history.push("/formatura")}>Formatura</li>
                <li onClick={() => history.push("/casamento")}>Casamento</li>
                <li onClick={() => history.push("/confraternizacao")}>Confraternização</li>
        </Ul>
    )
}

export default Nav