import React from 'react'
import ListCheckedStuffies from './ListCheckedStuffies'

function SubmissionContainer(props) {

  return (
    <>
      <ListCheckedStuffies
        stuffyCheckedList={props.stuffyCheckedList}
      />
    </>
  )
}

export default SubmissionContainer
