import Basket from "./shopping-cart-solid.svg";
const Checkout = (props) => {
   const filtered = props.database.filter((item) => {
      if(item.bought === true){
         return item;
      }
   }) 
   return (
      <div className="checkout">
         <img src={Basket} alt="<basket" />
         <span className="counter">
            {filtered.length}
         </span>
      </div>
   )
}
export default Checkout