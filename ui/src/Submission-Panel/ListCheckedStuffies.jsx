import React from 'react'
import { ListGroup } from 'react-bootstrap'

function ListCheckedStuffies(props) {

  function ItemizedStuffies(){
   const filteredTrue = props.stuffyCheckedList
    .filter((stuffyData) => stuffyData.isChecked === true)

    return(
      filteredTrue.map((stuffyData, i)=>
        <ListGroup.Item 
          action 
          variant="info" 
          key={`${i}`}
        >
          {stuffyData.stuffyName}
        </ListGroup.Item>
      )
    )
  }

  return (
    <div>
      <ListGroup>
        <ItemizedStuffies />
      </ListGroup>
    </div>
  )
}

export default ListCheckedStuffies
