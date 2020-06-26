const TrTblID = "statusTable"
const statusTableID = "statusTable"

class Student {
    id: number = 0
    name: string = ""
    course : Course = Course.AI
}

enum Course{
    AI,
    MI,
    WI,
}
class Transponder {
    id: string = "";
    inAusleihe: Boolean = false;
    status: TransponderStatus = null;
    constructor (id:string, inAusleihe: boolean){
        this.id = id
        if (inAusleihe){
            this.inAusleihe = true
            this.status = new TransponderStatus
        }
    }
}

class TransponderStatus {
    rooms: Array<Room> = []
    students: Array<Student> = []
    originalStart: Date = new Date()
    actualStart: Date = new Date()
    end: Date = new Date()
}

class Room {
    id: number = 0
    nr: string = ""
}

function addTrToTbl(tr: Transponder) {
    // Get a reference to the table
    let table = <HTMLTableElement>document.getElementById(statusTableID);
    let newRow = table.tBodies[0].insertRow(-1);
    let trId = newRow.insertCell(0);
    let vorZeit = newRow.insertCell(1);
    let ausgeliehenSeit = newRow.insertCell(2);
    trId.appendChild(document.createTextNode("#" + tr.id));
    vorZeit.appendChild(document.createTextNode( 
        dateToString(tr.status.originalStart) + 
        " - " + 
        dateToString(tr.status.end)));
    ausgeliehenSeit.appendChild(document.createTextNode(dateToString(tr.status.actualStart)));
}

// formats the date for that pretty printing
function dateToString(d: Date): string{
    let now = new Date()
    let s: String = ""
    let minDiff = now.getMinutes() - d.getMinutes()
    if (minDiff<2){
        return "just now"
    }
    else if ( minDiff<= 5 ){
        return minDiff + "Minutes ago" 
    }else{
        return fullDateToString(d)
    }
}

function fullDateToString(d: Date):string {
    let now = new Date()
    let s: String = ""
    let day = ""
    if (d.getDay() == now.getDay()) {
        day = "heute"
    } else if (now.getDay() - d.getDay() == 1) {
        day = "gestern"
    } else {
        day = d.getDay + "." + d.getMonth + "." + d.getFullYear
    }
    let time = d.getHours() + ":" + d.getMinutes()
    return day + " - " + time
}


function refreshStatusTable() {
    let table = <HTMLTableElement>document.getElementById(statusTableID);
    var new_tbody = document.createElement('tbody');
    table.replaceChild(new_tbody, table.tBodies[0])
    // todo filter um nur in ausleihe zu verwenden

    transponderList.forEach((tr, index) => {
        addTrToTbl(tr)
    })
}

var transponderList: Array<Transponder> = [
    new Transponder("1234",true),
    new Transponder("1923",true)
]

function createEntry(){
    let tbl = <HTMLTableElement> document.getElementById("testTable")
    let entry = tbl.insertRow(-1);
    let newCell = entry.insertCell(0)
    let newText = document.createTextNode('New bottom row');
    newCell.appendChild(newText);
}

function delEntry(){
    let tbl = <HTMLTableElement> document.getElementById("testTable")
    let entry = tbl.deleteRow(-1);
}
