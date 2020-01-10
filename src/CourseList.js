import React from 'react' 
import './index.css'

 import Panel from './Panel'
import Search from './Search'
import Sort from './Sort'





const data=   {
    
  
    course:[{
      name: "React - basics",
      description: "This course is going to take you through basics of React.",
      author: "James White",
      publishDate: "12/03/2019",
      duration: "00:03:56",
      image: "https://cdn.auth0.com/blog/react-js/react.png"
    },
    {
      "name": "Vue - learn vue in an hour",
      "description": "This course teaches you how to build a vue application in an hour.",
      "author": "Michael Brown",
      "publishDate": "17/10/2019",
      "duration": "00:00:59",
      "image": "https://vuejs.org/images/logo.png"
    },
    {
      "name": "CSS Animations",
      "description": "Learn how to animate anything in CSS",
      "author": "Alan Smith",
      "publishDate": "04/12/2018",
        "duration": "00:02:11",
      "image": "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
    },
    {
      "name": "JS - Zero to hero",
      "description": "Everything you need to know in JS",
      "author": "Sarah Parker",
      "publishDate": "12/03/2019",
        "duration": "01:01:35",
      "image": "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"

     }
   ]
 }







class CourseList extends  React.Component{
  constructor() {
    super()
    this.state = {
      search: '',
      coursedetail: [ {
        name: "React - basics",
        description: "This course is going to take you through basics of React.",
        author: "James White",
        publishDate: "12/03/2019",
        duration: "00:03:56",
       
      },
      {
        name: "Vue - learn vue in an hour",
        description: "This course teaches you how to build a vue application in an hour.",
        author: "Michael Brown",
         publishDate: "17/10/2019",
        duration: "00:00:59",
       

      },
      {
        name: "CSS Animations",
        description: "Learn how to animate anything in CSS",
        author: "Alan Smith",
        publishDate: "04/12/2018",
        duration: "00:02:11",
       

      },
      {
        name: "JS - Zero to hero",
        description: "Everything you need to know in JS",
        author: "Sarah Parker",
        publishDate: "12/03/2019",
        duration: "01:01:35",
      

      }
     ],
      search:'',
  
    }
    this.searchCourse = this.searchCourse.bind(this)
  }
  
  searchCourse(text) {
    this.setState({
        search: text
    })
  }


  
 
    listProducts = () => {
      console.log("duration",this.state.coursedetail)
      this.setState(state => {
        if (state.sort !== '') {
          state.coursedetail.sort((a, b) =>
            (state.sort === 'duration'
              ? ((a.duration > b.duration) ? 1 : -1)
              : ((a.duration < b.duration) ? 1 : -1)));
        } else {
          state.coursedetail.sort((a, b) => (a.id > b.id) ? 1 : -1);
        }
      })}
  
      
      handleSortChange = (e) => {
      this.setState({ sort: e.target.value });
      this.listProducts();
    
    }






 render(){
    return(
   <div className="container">
    
     <div className="search-Panel">
     <h4>Search Courses</h4>
    
      <Search onSearch={this.searchCourse}/>
     
      <Sort handleSortChange={this.handleSortChange} ></Sort>
      
      </div>
     
     <Panel item={data.course} searchText = {this.state.search}   />

    
     
    
     
   
     
     </div>
    )
  }

}

export default CourseList;   