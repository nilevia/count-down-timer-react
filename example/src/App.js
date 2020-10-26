import React from 'react'

import { CountDownHourly, CountDownDaily } from 'count-down-timer-react'
import 'count-down-timer-react/dist/index.css'

const App = () => {
  return(
  <div className="txt-center-hoz">
    Countdown hourly basic
    <CountDownHourly
      endDate={"2020-10-08T06:50:18.346Z"}
    />
    <br/>
    Countdown daily with affix and custom operator
    <CountDownDaily
      endDate={"2020-10-08T06:50:18.346Z"}
      dayAffix="Hari"
      hourAffix="Jam"
      minutesAffix="Menit"
      secondAffix="Detik"
      operator="-"
    />
    <br/>
    Countdown with custom style
    <CountDownDaily
      endDate={"2020-10-08T06:50:18.346Z"}
      dayAffix="day"
      hourAffix="hrs"
      minutesAffix="min"
      secondAffix="sec"
      className="light-blue bold font-muli-20"
    />
  </div>
  )
}

export default App
