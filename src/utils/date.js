export const dateDiff = (startDate, endDate = today()) => {
  var date = startDate.split("-")
  var end = new Date(endDate)
  var year = end.getFullYear()
  var month = end.getMonth() + 1
  var day = end.getDate()
  var yy = parseInt(date[0])
  var mm = parseInt(date[1])
  var dd = parseInt(date[2])
  var years, months
  // months
  months = month - mm
  if (day < dd) {
    months--
  }
  // years
  years = year - yy
  if (month * 100 + day < mm * 100 + dd) {
    years--
    months += 12
  }

  return `${years ? `${years} year${years > 1 ? "s" : ""},` : ""} ${
    months ? `${months} month${months > 1 ? "s" : ""}` : ""
  }`
}

function today() {
  return new Date().toString("yyyy-MM-dd")
}

export const getFormattedDate = date => {
  if (!date) {
    return null
  }
  date = new Date(date)
  return `${date.getMonth()}/${date.getFullYear()}`
}
