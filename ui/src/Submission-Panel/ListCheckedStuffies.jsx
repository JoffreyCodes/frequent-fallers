import React from 'react'
import { Table } from 'react-bootstrap'

function ListCheckedStuffies(props) {

  function ItemizedStuffies(){
   const filteredTrue = props.stuffyCheckedList
    .filter((stuffyData) => stuffyData.isChecked === true)

    function calculateCount(stuffyName){
      return 1;
    }

    return(
      filteredTrue.map((stuffyData, i)=>
        <tr>
          <td>
            {stuffyData.stuffyName}
          </td>
          <td>
            {calculateCount(stuffyData.stuffyName)}
          </td>
        </tr>
      )
    )
  }

  return (
    <div class="CheckedStuffiesContainer">
      <Table 
        striped 
        bordered 
        hover 
        size="sm"
        variant='info'      
      >
        <thead>
          <tr>
            <th>stuffy-name</th>
            <th>count</th>
          </tr>
        </thead>
        <tbody>
          <ItemizedStuffies />
        </tbody>
      </Table>
    </div>
  )
}

export default ListCheckedStuffies
