import React, {useState} from 'react'
import { StuffyCard } from './StuffyCard' 

export function StuffyGrid(props){

  const stuffyNames = props.stuffyList.map((stuffy)=>stuffy.stuffyName);

  let stuffyCheckedList = [];
  stuffyNames.forEach(stuffyName => [
    stuffyCheckedList.push({
      stuffyName: stuffyName, 
      isChecked: false
    })  
  ])

  const [stuffyChecked, setStuffyChecked] = useState(stuffyCheckedList)

  function handleCheck(event){
    let stuffyNameChecked = stuffyChecked
    stuffyNameChecked.forEach((stuffyCheck)=>{
      if (stuffyCheck.stuffyName === event.target.name)
        stuffyCheck.isChecked = event.target.checked
    })
    setStuffyChecked(stuffyNameChecked)
    console.log(stuffyChecked)  
  }

  return(
    <>
      {props.stuffyList.map((stuffy)=>
        <StuffyCard 
          stuffyName={stuffy.stuffyName}
          isChecked={handleCheck}
          key={stuffy.stuffyName}
        />
      )}
    </>
  )
}

export default StuffyGrid