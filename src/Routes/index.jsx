import {Switch} from "react-router-dom" 
import Route from "./route"
import { ToastContainer } from 'react-toastify';
import Initial from "../Pages/initial";
import Formatura from "../Pages/Formatura";
import Casamento from "../Pages/Casamento";
import Confraternizacao from "../Pages/Confraternizacao";

function Routes(){
    return(
        <div>
             <ToastContainer/>
            <Switch>
                <Route exact path={"/"} component={Initial}/>
                <Route exact path={"/formatura"} component={Formatura}/>
                <Route exact path={"/casamento"} component={Casamento}/>
                <Route exact path={"/confraternizacao"} component={Confraternizacao}/>
            </Switch>
        </div>
    )
}

export default Routes;