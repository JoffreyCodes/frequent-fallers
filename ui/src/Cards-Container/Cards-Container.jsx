import React from 'react'
import { StuffyGrid } from './StuffyGrid'

export function CardsContainer(props){
  return(
    <>
      <StuffyGrid stuffyList={props.stuffyList}/>
    </>
  )
}

export default CardsContainer