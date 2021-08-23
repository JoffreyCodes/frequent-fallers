import React from 'react'
import { StuffyGrid } from './StuffyGrid'

export function CardsContainer(props){
  return(
    <>
      <StuffyGrid 
        stuffyList={props.stuffyList}
        setStuffyCheckedList={props.setStuffyCheckedList}  
      />
    </>
  )
}

export default CardsContainer