import React, {useState} from 'react'
import DatePicker from 'react-date-picker'

function DateContainer(props) {
  const [date, setDate] = useState(new Date());
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


  function InputDate(){
    let weekday;
    try{
      const dateNum= date.getDay()
      weekday = `${weekdays[dateNum]}`
    }catch (err){
      weekday = "Please pick a date: "
    }
    return(weekday)
  }
  return (
    <>
    <InputDate />
    <hr/>
      <DatePicker 
        onChange={setDate}
        value={date}
      />
    </>
  )
}

export default DateContainer
