import React from 'react'
import { Container, Form, Card } from 'react-bootstrap'

export function StuffyCard(props){
  const stuffyImage = require(`../images/${props.stuffyName}.png`).default

  return(
    <>
      <Container 
        className="card-container"
        key={props.stuffyName}
      >
        <Card
          border='info' 
          style={{ width: '18rem' }}
          key={props.stuffyName}
        >
          <Card.Header>
          <Card.Img 
            variant="top" 
            src= {stuffyImage}
          />
          </Card.Header>
          <Card.Footer>
            <Form.Check
              type="checkbox"
              name={props.stuffyName}
              id={props.stuffyName}
              label={<h4>{props.stuffyName}</h4>}
              onChange={(event) =>
                props.isChecked(event)
              }
            />
          </Card.Footer>
        </Card>
      </Container>
    </>
  )
}