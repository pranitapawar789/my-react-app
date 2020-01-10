import React from 'react'

class Sort extends React.Component {
    
    render() { 
        return (  
            <div className="sort">
                    <label>Sort-by
               <select className="form-control"  onChange={this.props.handleSortChange}>
                            <option value="">Select</option>
                            <option value="duration">Lowest to highest Duration</option>
                            <option value="date">newly arrived</option>
                        </select>
                    </label>
                </div>
        )


    }
}
export default Sort;