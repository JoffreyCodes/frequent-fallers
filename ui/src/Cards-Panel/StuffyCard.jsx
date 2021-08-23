import React, {useState} from 'react'
import { Form, Card } from 'react-bootstrap'
export function StuffyCard(props){

  function stuffyImage(stuffyName){
    try {
      return (require(`../images/${stuffyName}.png`).default)
    } catch (err) {
      return (require(`../images/Image_Not_Found.png`).default)
    }
  }

  const [isChecked, setIsChecked] = useState(false)

  function handleCardClick(event){
    setIsChecked(!isChecked)
    props.isChecked([props.stuffyName, !isChecked, event])
  }

  return(
    <>
        <Card
          border='info'
          bg='light' 
          style={{ width: '16rem' }}
          key={props.stuffyName}
          onClick={handleCardClick}
        >
          <Card.Header>
            <h4>{props.stuffyName}</h4>
          </Card.Header>
          <Card.Footer>
          <Card.Img 
              variant="top" 
              src={stuffyImage(props.stuffyName)}
            />
            <Form.Check
              type="checkbox"
              id={props.stuffyName}
              checked={isChecked}
              onChange={()=>null}
            />
          </Card.Footer>
        </Card>
    </>
  )
}