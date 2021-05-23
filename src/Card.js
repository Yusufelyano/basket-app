import Button from "./Button.js"
const Card = (props) =>{
   return (
      <div className="card">
         <div class="card-image">
            <img src={props.product.image} alt="" />
         </div>
         <div class="card-info">
            <div class="card-name">{props.product.name}</div>
            <div>{props.product.rating}</div>
            <div class="card-price">{props.product.prise}</div>
            <Button 
            setBought={props.setBought}
            id={props.product.id}
            bought={props.product.bought}
            product={props.product}
            />
</div>
      </div>
   )
}
export default Card