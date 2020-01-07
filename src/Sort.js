// import React from 'react'
// import CourseList from './CourseList'
// class Sort extends React.Component{

//     constructor (props) {
//         super(props)
       
//         this.SortByDate = this.sortByDate.bind(this)
//         this.state = {
//           postList: [],
//           isOldestFirst: true
//         }
//       }

// sortByDate () {
//     const {postList} = this.state
//     let newPostList = postList
//     if (this.state.isOldestFirst) {
//       newPostList = postList.sort((a, b) => a.date > b.date)
//     } else {
//       newPostList = postList.sort((a, b) => a.date < b.date)
//     }
//     this.setState({
//       isOldestFirst: !this.state.isOldestFirst,
//       postList: newPostList
//     })
//   }
//   render () {
//     const {postList} = this.state
//     return (
//       <div >
//         <h1>Hello There</h1>
      
//         <button onClick={this.SortByDate}>Order by date</button>
//         {postList.map((item, index) => {
//           return <CourseList
//             post={item}
//             key={`post-list-key ${index}`}
//            />
//         })}
//       </div>
//     )
//   }
// }

// export default Sort;
