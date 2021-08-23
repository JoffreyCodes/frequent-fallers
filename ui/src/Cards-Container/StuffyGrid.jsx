import React, {useState} from 'react'
import { StuffyCard } from './StuffyCard' 
import { Row, Col } from 'react-bootstrap';

export function StuffyGrid(props){

  const stuffyNames = props.stuffyList.map((stuffy)=>stuffy.stuffyName);

  let initList = [];
  stuffyNames.forEach(stuffyName => [
    initList.push({
      stuffyName: stuffyName, 
      isChecked: false
    })  
  ])

  const [stuffyCheckedList, setStuffyCheckedList] = useState(initList)

  function handleCheck(event){
    let stuffyNameChecked = stuffyCheckedList
    stuffyNameChecked.forEach((stuffyCheck)=>{
      if (stuffyCheck.stuffyName === event[0])
        stuffyCheck.isChecked = event[1]
    })
    setStuffyCheckedList(stuffyNameChecked)
    props.setStuffyCheckedList(stuffyCheckedList)
  }

  return(
    <>
      <Row 
        xs={'auto'} 
        sm={'auto'} 
        md={'auto'} 
        lg={'auto'}
        xl={'auto'}
        xxl={'auto'}
        className="g-4"
      >
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