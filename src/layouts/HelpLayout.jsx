import { NavLink, Outlet } from "react-router-dom"

const HelpLayout = () => {
  return (
    <div className="help-layout">
        <h2>Website Help</h2>
        <p>Tempor excepteur irure mollit cupidatat fugiat sint dolor tempor nostrud Lorem velit minim pariatur elit.</p>
        <nav>
            <NavLink to="faq">View The FAQ</NavLink> 
            <NavLink to="contatct">Contact Us</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default HelpLayout

//help/faq