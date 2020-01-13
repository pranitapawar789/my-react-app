import React, { Component } from 'react';
import './index.css'
class cartItem extends Component {

    render() { 
       const cartCourse= this.props.cartCourse
       console.log('items in cart',cartCourse);
       const x = cartCourse.map((Course,i)=>{
       return <li key={i} className="listing">{Course.name}</li>
       })
        console.log('name of course',x)
        

        return ( 
            <div className="row">
            {cartCourse.length===0 ?<span>cart is empty</span>:<div><span>added courses</span>{x}</div>}
            </div>
         );
    }
}
 
export default cartItem;