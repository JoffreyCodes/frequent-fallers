import React, {useState} from 'react'
import DatePicker from 'react-date-picker'

function DateContainer(props) {
  const [date, setDate] = useState(new Date());
  const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const [weekday, setWeekday] = useState('')

  function InputDate(){
    try{
      const dateNum= date.getDay()
      setWeekday(`${weekdays[dateNum]}`)
      props.setWeekday(`${weekdays[dateNum]}`)
    }catch (err){
      setWeekday("Please pick a date: ")
      props.setWeekday("Please pick a date: ")
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
