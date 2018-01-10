import React, {Component} from 'react'

class Expense extends Component {
    render() {
       let {name, category, amount, date, month, year, id} = this.props.data
        let remove = this.props.remove
       // console.log(this.props.data)
        return(
            <tr>
                <td>{name}</td>
                <td>{category}</td>
                <td>{amount}</td>
                <td>{date}-{month}-{year}</td>
                <td>
                    <a href="javascript:void(0)" onClick={()=>{remove(id)}}>Delete</a>
                </td>
            </tr>
        )
    }
}

 export default Expense