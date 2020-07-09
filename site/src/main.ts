const TrTblID = "statusTable"
const statusTableID = "statusTable"
// this needs first
var roomList = randomRoomList()
// this needs second
var transponderList: Array<Transponder> = randomTransponderList()

var statusTableHeader: Array<string> = ["Transponder ID", "Originaler Ausleihzeitpunkt", "tatsächlicher Ausleihzeitpunkt","Ausleihfrist"]
var historyTableHeader: Array<string> = ["Begin", "Ende", "Raeume", "Verantwortliche"]
var roomsTableHeader: Array<string> = ["Nummer", "Bezeichnung", "Belegt"]

var table = <HTMLTableElement> document.getElementById("DynamicTable")

//onload, we want to create the status table
statusTable()

// creates the status table
function statusTable() {
    let entries = statusTableEntries()
    let rows = entries.map(tr => {
        let r = new TableRow()
        r.shrinkedEntries = transponderToStatusEntry(tr)
        r.expandedEntry = transponderToExpandedDom(tr)
        if(tr.status.end.getTime() <= new Date().getTime()){
            r.level = RowLevel.Warning
        }
        return r
    })
    buildTable(statusTableHeader, rows)
}


function historyTable(){
    let entries: Array<Array<string>> = [["not required"," will be added later"]] // todo filter and create entries
    buildTable(historyTableHeader, [])
}

function roomTable(){
    let entries: Array<Room> = roomList
    let rows = entries.map(room => {
        let row = new TableRow()
        row.shrinkedEntries = roomToShrinkedEntry(room)
        row.expandedEntry = roomToExpandedDom(room)
        return row
    })
    buildTable(roomsTableHeader, rows)
}



