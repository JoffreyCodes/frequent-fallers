import React from 'react'
import { StuffyCard } from './StuffyCard'

export function CardsContainer(props){
  return(
    <>
    <StuffyCard stuffyList={props.stuffyList}/>
    </>
  )
}

export default CardsContainer