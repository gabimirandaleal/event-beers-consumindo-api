import Nav from "../Nav"
import {StyledBurger} from "./style"
import { useState } from "react"

const Burger = () => {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <Nav open={open}/>
      </>
    )
  }
  
  export default Burger