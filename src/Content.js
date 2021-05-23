import Card from "./Card.js"
const Content = (props) =>{
   
   return(
      <div className="content">
         {props.database.map((product) => {
            return (
            <Card 
             product = { product }
             id = { product.id }
             setBought = { props.setBought }
             bought = { product.bought }                       
            />
            )
         })}
         
      </div>
   )
}

export default Content

