import React from 'react';
import './index.css'



class AddtoCart extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                selected:'',
                qty:0,
                disable:true
              

             
                            
            }
        }
        
  
addCourse = (e) =>{
   
    this.setState({
        selected:"Added to cart",
        qty: this.state.qty + 1,
        
     
      
        

    })
   
  //  console.log(this.state.selected);
    console.log(this.state.qty);
    e.preventDefault()
   

    
    
}

removeCourse = (e) =>{
  
    this.setState({
        selected:"Removed",
      qty:this.state.qty - 1
    })
    console.log(this.state.qty);
  
  //  console.log(this.state.selected);
  e.preventDefault();
}





    render(){
        
        return(
           <>
            <div>
            <button onClick={this.addCourse} disabled={!this.state.disable} >Add to Cart </button>
            <button onClick={this.removeCourse}>Remove</button>
            <h3>Cart Items:{this.state.qty}</h3>
            </div>
          
            </>
            
            
        )
    }
}

export  default AddtoCart; 