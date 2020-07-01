const TrTblID = "statusTable"
const statusTableID = "statusTable"


function addTrToTbl(tbl:HTMLTableElement, tr: Transponder) {
    // get a string array from the transponder
    let a = transponderTableEntryArray(tr)
    addTableEntry(tbl,a)
}

function transponderTableEntryArray(tr: Transponder):Array<string>{
    return [
        "#" + tr.id,
        dateToString(tr.status.originalStart),
        dateToString(tr.status.actualStart),
        fullDateToString(tr.status.end)
    ]
}

function addTableEntry(table:HTMLTableElement, cells: Array<string>){
    let newRow = appendTableRow(table)
    appendExpandButton(newRow)
    for (let i = 0; i < cells.length; i++) {
        let cell = newRow.insertCell(-1)
        cell.classList.add("tableEntry")
        let textNode = document.createTextNode(cells[i])
        cell.appendChild(textNode)
    }
}

// see https://mdbootstrap.com/docs/jquery/tables/basic/, https://mdbootstrap.com/snippets/jquery/cam/979615
function appendTableRow(table:HTMLTableElement):HTMLTableRowElement {
    let newRow = table.tBodies[0].insertRow(-1);
    newRow.classList.add("accordion-toggle", "collapsed")
    newRow.dataset.toggle = "collapse"
    return newRow
}

function appendExpandButton(row: HTMLTableRowElement){
    let cell = row.insertCell(-1)
    cell.classList.add("expand-button")
}

function refreshStatusTable() {
    let table = <HTMLTableElement>document.getElementById(statusTableID);
    cleanTable(table)
    let entries = statusTableEntries()
    entries.forEach((tr, index) => {
            addTrToTbl(table, tr)
    })
}

function statusTableEntries(): Array<Transponder> {
    let inAusleihe = transponderList.filter(tr => tr.inAusleihe)
    inAusleihe.sort((tr1,tr2) => 
        tr1.status.end.getTime() - tr2.status.end.getTime()
     );
     return inAusleihe
}

function cleanTable(table: HTMLTableElement) {
    let b = table.tBodies[0]
    let size = b.rows.length
    for (let i = 1; i < size; i++) {
        b.deleteRow(-1)
    }
}
