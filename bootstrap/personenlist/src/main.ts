const TrTblID = "statusTable"
const statusTableID = "statusTable"


function addTrToTbl(tbl:HTMLTableElement, tr: Transponder) {
    // get a string array from the transponder
    let a = transponderTableEntryArray(tr)
    addTableEntry(tbl,a)
}

function transponderTableEntryArray(tr: Transponder){
    return [
        "#" + tr.id,
        dateToString(tr.status.originalStart),
        dateToString(tr.status.actualStart),
        fullDateToString(tr.status.end)
    ]
}

function addTableEntry(table:HTMLTableElement, cells: Array<string>){
    let newRow = table.tBodies[0].insertRow(-1);
    for (let i = 0; i < cells.length; i++) {
        let cell = newRow.insertCell(i)
        cell.classList.add("tableEntry")
        let textNode = document.createTextNode(cells[i])
        cell.appendChild(textNode)
    }
    appendExpandButton(newRow)
}

function appendExpandButton(row: HTMLTableRowElement){
    let cell = row.insertCell(-1)
    cell.classList.add("expand-button")
    let button = expandRowButton()
    button.onclick = expandRow
    cell.appendChild(button)
}

function expandRowButton(): HTMLButtonElement {
    let button = document.createElement('button')
    button.innerText = "expand"
    button.classList.add("expandButton")
    return button
}

function expandRow(){
    console.log("hello World")
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
