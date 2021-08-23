import React, {useState} from 'react'
import { StuffyCard } from './StuffyCard' 
import { Row, Col } from 'react-bootstrap';

export function StuffyGrid(props){

  const stuffyNames = props.stuffyList.map((stuffy)=>stuffy.stuffyName);

  let stuffyCheckedList = [];
  stuffyNames.forEach(stuffyName => [
    stuffyCheckedList.push({
      stuffyName: stuffyName, 
      isChecked: false
    })  
  ])

  const [stuffyChecked, setStuffyChecked] = useState(stuffyCheckedList)

  function handleCheck(event){
    let stuffyNameChecked = stuffyChecked
    stuffyNameChecked.forEach((stuffyCheck)=>{
      if (stuffyCheck.stuffyName === event[0])
        stuffyCheck.isChecked = event[1]
    })
    setStuffyChecked(stuffyNameChecked)
    console.log(stuffyChecked)
  }

  return(
    <>
      <Row xs={1} sm={1} md={2} className="g-4">
        {props.stuffyList.map((stuffy)=>
          <Col key={stuffy.stuffyName}>
            <StuffyCard 
              stuffyName={stuffy.stuffyName}
              isChecked={handleCheck}
              key={stuffy.stuffyName}
            />
          </Col>
        )}
      </Row>
      </>
  )
}

export default StuffyGrid