// import React from 'react'




// class Sort extends React.Component{
//     constructor(){
//         super()
//             this.state = {
//                 year:'2018',
//                 newYear:[],
//                 oldestFirst:true
//             }

       
//     }

//     sortByDate = () =>{
//         this.setState({
//             newYear:this.state.year
//         })
//         if(this.state.oldestFirst){
//             newYear = year.sort((a,b)=>a.this.state.year>b.this.state.newYear)
//         }else{
//             newYear = year.sort((a,b)=>a.this.state.year<b.this.state.newYear)
//         }
//     }
//     render () {
       
//         return (
//           <div >
           
          
//             <button onClick={this.SortByDate}>Order by date</button>
//             {postList.map((item, index) => {
//               return <CourseList
//                 post={item}
//                 key={`post-list-key ${index}`}
//                />
//             })}
//           </div>
//         )
//       }

   
// }


// export default Sort;


// const Sorting = (props)=> {
//     return(
//         <div>
//             <p1>sort-by</p1>
//             <button onClick>duration</button>
//             <button>date</button>
//          <ul>
//             {props.durations.map((check, i)=>{
//                   return <li key={i}>{check.duration}</li>
//                 })}
//         </ul>
//         </div>
//             )
//     }