const clockTime =
  document.querySelector ('#clock-time')

const clockProgress =
  document.querySelector ('#clock-progress')

function update() {
  const now =
    Temporal.Now.zonedDateTimeISO ()

  const hourOfYear =
    (now.dayOfYear - 1) * now.hoursInDay + now.hour

  const hour =
    String (hourOfYear)
    . padStart (4, '0')
  
  const minute =
    String (now.minute)
    . padStart (2, '0')
  
  const second =
    String (now.second)
    . padStart (2, '0')

  // Formatted output should look like 0000:00:00
  clockTime.textContent =
    `${hour}:${minute}:${second}`
  
  // No need to display seconds in the title
  document.title =
    `${hour}:${minute} - Clock`
  
  // Needs to be constantly refreshed in case of a year or timezone change
  clockProgress.max =
    now.daysInYear * now.hoursInDay
  
  clockProgress.value =
    hourOfYear
}

update ()
setInterval (update, 1000)
