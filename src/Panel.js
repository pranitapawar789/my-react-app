import React from 'react'
import AddtoCart from './AddtoCart'
import './index.css'
import Sort from  './Sort'



class Panel extends React.Component{
   
    render(){
       // console.log(this.props.searchText)
        let bookList = this.props.item;
        let SeachText = this.props.searchText;
        return(
            <section>
                <h2>Available courses</h2>
                <div>
                    <div className="container"></div>
                    <div>Courses</div>
                    
                    <ul>
                        {bookList.map((item, i)=>{
                            if(item.name.indexOf(SeachText) === -1){
                                return null
                            }
                            else {
                                return<div> <li className="list-panel">{`Course Name:${item.name}         
                                                Course Duration:${item.duration}      
                                               Author:${item.author}`}
                             </li> <AddtoCart/> 
                             </div>
                            }
                        })}

                
                    </ul>
                   
                </div>
                </section>
                )
        
    }
}

export default Panel;