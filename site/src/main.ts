const TrTblID = "statusTable"
const statusTableID = "statusTable"
// this needs first
var roomList = randomRoomList()
// this needs second
var transponderList: Array<Transponder> = randomTransponderList()

var statusTableHeader: Array<string> = ["Transponder ID", "Originaler Ausleihzeitpunkt", "tatsächlicher Ausleihyeitpunkt","Ausleihfrist"]
var historyTableHeader: Array<string> = ["Begin", "Ende", "Raeume", "Verantwortliche"]
var roomsTableHeader: Array<string> = ["Nummer", "Bezeichnung", "Belegt"]

var table = <HTMLTableElement> document.getElementById("DynamicTable")

//onload, we want to create the status table
statusTable()

// creates the status table
function statusTable() {
    let entries = statusTableEntries()
    let shrinkedEntries = entries.map(tr => transponderToStatusEntry(tr))
    let expandedEntries = entries.map(tr => transponderToExpandedDom(tr))
    buildTable(statusTableHeader, shrinkedEntries,expandedEntries)
}


function historyTable(){
    let entries: Array<Array<string>> = [["not required"," will be added later"]] // todo filter and create entries
    buildTable(historyTableHeader, entries, [])
}

function roomTable(){
    let entries: Array<Room> = roomList
    let shrinkedEntries = entries.map(r => roomToShrinkedEntry(r))
    let expandedEntries = entries.map(r => roomToExpandedDom(r))
    buildTable(roomsTableHeader, shrinkedEntries,expandedEntries)
}


