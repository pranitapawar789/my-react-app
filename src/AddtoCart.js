import React from 'react';
import './index.css'



class AddtoCart extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                selected:'',
                qty:1,
                            
            }
        }
        
  
addCourse = (e) =>{
   
    this.setState({
        selected:"Added to cart",
        qty: this.state.qty+1,
        
      
        

    })
   
    console.log(this.state.selected);
    console.log(this.state.qty);
   

    
    
}

removeCourse = () =>{
  
    this.setState({
        selected:"Removed",
      qty:(this.state.qty - 1)
    })
    console.log(this.state.qty);
    console.log(this.state.selected);
}





    render(){
        
        return(
           <>
            <div>
            <button onClick={this.addCourse}  >Add to Cart </button>
            <button onClick={this.removeCourse}>Remove</button>
            </div>
          
            </>
            
            
        )
    }
}

export  default AddtoCart; 