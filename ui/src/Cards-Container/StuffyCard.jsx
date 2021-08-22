import React, {useState} from 'react'
import { Container, Form, Card } from 'react-bootstrap'

export function StuffyCard(props){
  const stuffyList = props.stuffyList
  const [isChecked, setIsChecked] = useState(true);

  const handleOnChange = (event) => {
    setIsChecked(!isChecked);
    console.log(event.target.name)
  };

  const images = {}
  stuffyList.map((stuffy)=>stuffy.stuffyName).forEach(stuffyName => {
    images[stuffyName] = require(`../images/${stuffyName}.png`);

  })

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
            checked={!isChecked}
            onChange={handleOnChange}
          />
        </Card.Footer>
      </Card>
      </Container>
    )}
    </>
  )
}