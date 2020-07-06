const TrTblID = "statusTable"
const statusTableID = "statusTable"


function transponderTableEntryArray(tr: Transponder):Array<string>{
    return [
        "#" + tr.id,
        dateToString(tr.status.originalStart),
        dateToString(tr.status.actualStart),
        fullDateToString(tr.status.end)
    ]
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
