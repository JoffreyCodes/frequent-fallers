import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useQuery, gql } from "@apollo/client";


import './Layout.css';
import CardsContainer from '../Cards-Container/Cards-Container';

const STUFFY_LIST = gql `
query{
  stuffies{
    stuffyName primaryColor secondaryColor
  }  
}`

export function Layout(){
  const [stuffyList, setStuffyList] = useState([])

  useQuery(STUFFY_LIST, {
    onCompleted: (data) => setStuffyList(data.stuffies), 
    fetchPolicy: 'no-cache',
    notifyOnNetworkStatusChange: true
  })

  return (
    <Container fluid className="app-container">
      <Row>
        <Col 
          className="app-wrapper"
          md={{offset:1, span:10}}
        >
          <Col 
            className="nav-bar"
            md={{span:12}}
          >
            Nav
          </Col>
          <Row>
            <Col 
              className="cards-container"
              md={{span:9}}
            >
              <CardsContainer stuffyList={stuffyList}/>
            </Col>
            <Col 
              className="submission-container"
              md={{span:3}}
            >
              Cards Container
            </Col>
          </Row>
          <Col 
            className="footer"
            md={{span:12}}
          >
            footer
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Layout