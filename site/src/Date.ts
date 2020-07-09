
// formats the date for that pretty printing
function dateToString(d: Date): string {
    let now = new Date()
    let s: String = ""
    let minDiff = (now.getTime() - d.getTime()) * 1000 *60
    if (minDiff < 2) {
        return "Vor einem Moment"
    }
    else if (minDiff <= 5) {
        return "Vor " + minDiff + " Minuten"
    } else {
        return fullDateToString(d)
    }
}

function fullDateToString(d: Date): string {
    let now = new Date()
    let s: String = ""
    let day = ""
    if (d.getDay() == now.getDay()) {
        day = "heute"
    } else if (now.getDay() - d.getDay() == 1) {
        day = "gestern"
    } else {
        day = d.getDay() + "." + d.getMonth() + "." + d.getFullYear()
    }

    let hours = d.getHours().toString()
    if (hours.length == 1) hours = "0" + hours

    let minutes = d.getMinutes().toString()
    if (minutes.length == 1) minutes = "0" + minutes

    let time = hours + ":" + minutes
    return day + " - " + time
}