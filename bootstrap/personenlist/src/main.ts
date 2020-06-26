const TrTblID = "statusTable"
const statusTableID = "statusTable"


function addTrToTbl(tbl:HTMLTableElement, tr: Transponder) {
    // Get a reference to the table
    let a = transponderTableEntryArray(tr)
    addTableEntry(tbl,a)
}

function transponderTableEntryArray(tr: Transponder){
    return [
        "#" + tr.id,
        dateToString(tr.status.originalStart) + " bis " + dateToString(tr.status.end),
        dateToString(tr.status.actualStart)
    ]
}

function addTableEntry(table:HTMLTableElement, cells: Array<string>){
    let newRow = table.tBodies[0].insertRow(-1);
    for (let i = 0; i < cells.length; i++) {
        let cell = newRow.insertCell(i)
        let textNode = document.createTextNode(cells[i])
        cell.appendChild(textNode)
    }
}

function refreshStatusTable() {
    let table = <HTMLTableElement>document.getElementById(statusTableID);
    cleanTable(table)
    transponderList.forEach((tr, index) => {
        if (tr.inAusleihe)
            addTrToTbl(table, tr)
    })
}

function cleanTable(table: HTMLTableElement) {
    let b = table.tBodies[0]
    let size = b.rows.length
    for (let i = 1; i < size; i++) {
        b.deleteRow(-1)
    }
}
