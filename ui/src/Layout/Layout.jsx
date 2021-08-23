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
  const [stuffyCheckedList, setStuffyCheckedList] = useState([])

  const [onCompleted, setOnCompleted] = useState(false)

  const {data, error, loading} = useQuery(STUFFY_LIST, {
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  })
  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`;
  if(data && onCompleted === false){
    setStuffyList(data.stuffies)
    setOnCompleted(true)
  }

  return (
    data ?
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
                <CardsContainer 
                  stuffyList={stuffyList}
                  setStuffyCheckedList={setStuffyCheckedList}
                />
              </Col>
              <Col 
                className="submission-container"
                md={{span:3}}
              >
                Cards Submission
                {/* {stuffyCheckedList} */}
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
    : null
  )
}

export default Layout