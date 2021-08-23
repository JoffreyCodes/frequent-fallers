import React from 'react'
import ListCheckedStuffies from './ListCheckedStuffies'
import DateContainer from './DateContainer'

function SubmissionContainer(props) {

  return (
    <>
      <DateContainer />
      <ListCheckedStuffies
        stuffyCheckedList={props.stuffyCheckedList}
      />
    </>
  )
}

export default SubmissionContainer
