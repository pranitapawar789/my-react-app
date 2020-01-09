import React from 'react'
import './index.css'


class  Cart extends React.Component{
    render(){
        let quant = this.props.qty;
        return(
            <div>
   <div className="cart-panel"> 
            <h4>Quantity:{this.quant}</h4>
   </div>

                </div>
        )
    }
}

export default Cart;