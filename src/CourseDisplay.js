import React from 'react'
import './index.css'

class CourseDisplay extends  React.Component {
    state = {  }
    render() { 
         let coursename = this.props.courses.map((Course,i)=>{
             return Course.name
           
         })
         console.log('courses',coursename);
    
         const coursestodisplay=this.props.courses.map((course, i)=>{

                            if(course.name.indexOf(this.props.searchText)=== -1) {
                                return null;
                            } else {
                                return (
                                
                                 <div className="courses">
                                 <div className="course-list">< li key={i} className="list">Course Name:{course.name}</li> <p> Duration: {course.duration} </p><p>Course Date:{course.publishDate}</p> </div>
                                  <div className="btn">
                                  <button className="add" onClick={(e)=>this.props.handleAddToCart(e, course)}>Add to cart</button>
                                  <button className="remove" onClick={(e)=>this.props.handelRemoveCart(e, course)}>Remove</button>
                                  </div>
                                  </div>
                                 ) }
                        })
                    
                             
                   
                    
        
      


        return (
<div className="container">
    {coursestodisplay}
</div>
          );
    }
}
 
export default CourseDisplay;


