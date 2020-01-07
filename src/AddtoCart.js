import React from 'react';
import './index.css';

class AddtoCart extends React.Component{

addCourse = () =>{

    alert( " added to cart")
}






    render(){
        return(
            <button onClick={this.addCourse}>Add to Cart </button>
        )
    }
}

export  default AddtoCart; 