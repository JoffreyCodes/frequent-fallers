import React, {useState} from 'react'
import { Container, Form, Card } from 'react-bootstrap'

export function StuffyCard(props){
  const stuffyImage = require(`../images/${props.stuffyName}.png`).default
  const [isChecked, setIsChecked] = useState(false)

  function handleCardClick(event){
    setIsChecked(!isChecked)
    props.isChecked([props.stuffyName, !isChecked, event])
  }

  return(
    <>
      <Container
        className="card-container"
        key={props.stuffyName}
      >
        <Card
          border='info'
          bg='light' 
          style={{ width: '18rem' }}
          key={props.stuffyName}
          onClick={handleCardClick}
        >
          <Card.Header>
            <h4>{props.stuffyName}</h4>
          </Card.Header>
          <Card.Footer>
          <Card.Img 
              variant="top" 
              src= {stuffyImage}
            />
            <Form.Check
              type="checkbox"
              id={props.stuffyName}
              checked={isChecked}
              onChange={()=>null}
            />
          </Card.Footer>
        </Card>
      </Container>
    </>
  )
}