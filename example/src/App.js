import React from 'react'

import { CountDownHourly, CountDownDaily } from 'count-down-timer-react'
import 'count-down-timer-react/dist/index.css'

const App = () => {
  return(
  <div className="txt-center-hoz">
    Countdown hourly basic
    <CountDownHourly
      endDate={"2020-10-26T16:50:18.346Z"}
      className="bold"
    />
    <br/>
    Countdown daily with affix and custom operator
    <CountDownDaily
      endDate={"2020-10-27T06:50:18.346Z"}
      dayAffix="Hari"
      hourAffix="Jam"
      minutesAffix="Menit"
      secondAffix="Detik"
      operator="-"
      className="bold"
    />
    <br/>
    Countdown with custom style
    <CountDownDaily
      endDate={"2020-10-28T06:50:18.346Z"}
      dayAffix="day"
      hourAffix="hrs"
      minutesAffix="min"
      secondAffix="sec"
      className="light-blue bold font-muli-20"
    />

    <br/>

    <CountDownDaily
      endDate={"2020-10-30T06:50:17.346Z"}
      dayAffix="Day"
      hourAffix="Hour"
      minutesAffix="Minutes"
      secondAffix="Second"
      className="red font-muli-20"
      operator=" "
    />
  </div>
  )
}

export default App
