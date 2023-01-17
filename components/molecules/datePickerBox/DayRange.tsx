import React, {useEffect, useState} from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'
import ko from "date-fns/locale/ko"
import {subDays} from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css'

const DayRange = ({onDateStart, onDateEnd} : any) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    //console.log(JSON.stringify(startDate))
    return(
        <>
      <DatePicker
        selected={startDate}
        onChange={(date : Date) => {onDateStart(date)
        setStartDate(date)} }
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      ~
      <DatePicker
        selected={endDate}
        onChange={(date : Date) => {onDateEnd(date)
        setEndDate(date)}}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
    );
}

export default DayRange;
