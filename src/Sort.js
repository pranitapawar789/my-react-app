// import React from 'react'

// class Sort extends React.Component {
    
//     render() { 
      
//         return (  
            
//             <div className="sort">
//                     <label>Sort-by
//                <select className="form-control"  onChange={this.props.handleSortChange}>
//                             <option value="">Select</option>
//                             <option value="duration">sort by duration</option>
//                             <option value="date">sort by date</option>
//                         </select>
                      
//                     </label>
//                 </div>
//         )


//     }
// }
// export default Sort;

import React from 'react'
import './index.css'
class Sort extends React.Component {
    render() { 
        return (  
                 <div className="sorting">
                     <label>Sort-by
                         <select className="form-control" onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="duration">Sort by duration</option>
                            <option value="date">sort by date</option>
                        </select>
                    </label>
                </div>
        );
    }
}
 
export default Sort;