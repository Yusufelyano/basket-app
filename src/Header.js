import Logo from "./Logo/Logo.js";
import Menu from "./Menu.js"
import Checkout from "./Checkout/Checkout.js";


const Header = (props) =>{
   return (
      <div className="header">
         <Logo />
         <Menu />
         <Checkout database={props.database} />
         выход
      </div>
   )
}

export default Header;