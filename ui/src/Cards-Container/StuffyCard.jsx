import React, {useState} from 'react'
import { Container, Form, Card } from 'react-bootstrap'

export function StuffyCard(props){
  const stuffyList = props.stuffyList;
  // const [isChecked, setIsChecked] = useState();

  const images = {}
  const stuffyNames = stuffyList.map((stuffy)=>stuffy.stuffyName);
  stuffyNames.forEach(stuffyName => {
    images[stuffyName] = require(`../images/${stuffyName}.png`);
  });

  let stuffyCheckedList = [];
  stuffyNames.forEach(stuffyName => [
    stuffyCheckedList.push({
      stuffyName: stuffyName, 
      isChecked: false
    })  
  ])

  const [stuffyChecked, setStuffyChecked] = useState(stuffyCheckedList)

  function handleClick(event){
    let stuffyNameChecked = stuffyChecked
    stuffyNameChecked.forEach((stuffyCheck)=>{
      if (stuffyCheck.stuffyName === event.target.name)
        stuffyCheck.isChecked = event.target.checked
    })
    setStuffyChecked(stuffyNameChecked)
  }

  return(
    <>
      {stuffyList.map((stuffy)=>
        <Container 
          className="card-container"
          key={stuffy.stuffyName}
        >
        <Card
          border='info' 
          style={{ width: '18rem' }}
          key={stuffy.stuffyName}
        >
          <Card.Header>
          <Card.Img 
            variant="top" 
            src= {images[stuffy.stuffyName].default}
          />
          </Card.Header>
          <Card.Footer>
            <Form.Check
              type="checkbox"
              name={stuffy.stuffyName}
              id={stuffy.stuffyName}
              label={<h4>{stuffy.stuffyName}</h4>}
              onChange={handleClick}
            />
          </Card.Footer>
        </Card>
        </Container>
      )}
    </>
  )
}