const TrTblID = "statusTable"
const statusTableID = "statusTable"
var transponderList: Array<Transponder> = randomTransponderList()

var statusTableHeader: Array<string> = ["Transponder ID", "Originaler Ausleihzeitpunkt", "tatsächlicher Ausleihyeitpunkt","Ausleihfrist"]
var historyTableHeader: Array<string> = ["Begin", "Ende", "Raeume", "Verantwortliche"]
var personsTableHeader: Array<string> = ["Name", "Martikelnummer", "Kurs"]

var table = <HTMLTableElement> document.getElementById("DynamicTable")

//onload, we want to create the status table
statusTable()

// creates the status table
function statusTable() {
    let entries = statusTableEntries()
    let shrinkedEntries = entries.map(tr => {
        return transponderToStatusEntry(tr)
    })
    // todo refaktor in own function
    let expandedEntries = entries.map(tr => {
        let e = new ExpandedTableEntry()
        e.firstEntry = "Gruppenmitglieder: \n\n "+ tr.status.students.join("\n")
        e.secondEntry = "TODO Gruppenverantwortlicher\n\nRaumliste:\n" + tr.status.rooms.join("\n")
        return e
    })
    buildTable(statusTableHeader, shrinkedEntries,expandedEntries)
}

// filters and sorts a list of all currently lend out transponders
function statusTableEntries(): Array<Transponder> {
    let lendOutTrList = transponderList.filter(tr => tr.lendOut)
    lendOutTrList.sort((tr1,tr2) => 
        tr1.status.end.getTime() - tr2.status.end.getTime()
     );
     return lendOutTrList
}

// Builds an Array of strings from one Transponder which will represent one table array
function transponderToStatusEntry(tr: Transponder):Array<string>{
    return [
        "#" + tr.id,
        dateToString(tr.status.originalStart),
        dateToString(tr.status.actualStart),
        fullDateToString(tr.status.end)
    ]
}

function historyTable(){
    let entries: Array<Array<string>> = [["not required"," will be added later"]] // todo filter and create entries
    buildTable(historyTableHeader, entries)
}

function personTable(){
    let entries: Array<Array<string>> = [["FOO", "BAR"]] // todo filter and create entries
    buildTable(personsTableHeader, entries)
}