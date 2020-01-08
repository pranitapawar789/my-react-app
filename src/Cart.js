import React from 'react'
import AddtoCart from './AddtoCart'


class  Cart extends React.Component{
    render(){
        let quant = this.props.qty;
        return(
            <div>
    <h4>Quantity:{this.quant}</h4>

                </div>
        )
    }
}

export default Cart;