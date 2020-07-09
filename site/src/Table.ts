// All functions that mess with the Table

enum EntryLevel{
    Danger = "danger-color",
    Warning = "warning-color",
    Info = ""
}

class TableRow{
    shrinkedEntries: Array<string> = []
    expandedEntry: Node = null
    level:  EntryLevel = EntryLevel.Info
}


function buildTable(headerCells: Array<string>, rows: Array<TableRow>){
    setTableHead(headerCells)
    cleanTableBody()
    rows.forEach(it => {
        addShrinkedTableEntry(it.shrinkedEntries)
        if (it.expandedEntry != null)
            addExpandedTableEntry(it.expandedEntry,it.shrinkedEntries.length)
    })
}

function cleanTableBody() {
   let b = table.tBodies[0]
    if (b == null) b = table.createTBody()
    let size = b.rows.length
    for (let i = 0; i < size; i++) {
        b.deleteRow(-1)
    }
}

function setTableHead(cells: Array<string>){
    let head = table.createTHead()
    head.deleteRow(-1)
    let row = head.insertRow(-1)

    // all of our tables are expandable, so we add the place for the button every time
    let th = document.createElement("th")
    th.innerHTML = "#"
    row.appendChild(th)

    // add all the header strings
    for (let i = 0; i < cells.length; i++) {
        let th = document.createElement("th")
        th.innerHTML = cells[i]
        row.appendChild(th)
    }
}


function addShrinkedTableEntry(cells: Array<string>){
    let row = appendShrinkedTableRow()
    // expand button at the start Button
    let cell = row.insertCell(-1)
    cell.classList.add("expand-button")
    // Adds all the cells 
    for (let i = 0; i < cells.length; i++) {
        appendTextCell(row,cells[i])
    }
    return row.rowIndex
}

// see https://mdbootstrap.com/docs/jquery/tables/basic/, https://mdbootstrap.com/snippets/jquery/cam/979615
function appendShrinkedTableRow():HTMLTableRowElement {
    let newRow = table.tBodies[0].insertRow(-1);
    newRow.classList.add("accordion-toggle", "collapsed")
    let attributes = [
        ["data-toggle", "collapse"],
        ["href", "#collapse" + newRow.rowIndex],
        ["aria-expanded", "false"],
    ]
    attributes.forEach(l => {
        newRow.setAttribute(l[0],l[1])
    });
    return newRow
}

function appendTextCell(row: HTMLTableRowElement, t:string){
    let cell = row.insertCell(-1)
    cell.classList.add("tableEntry")
    let textNode = document.createTextNode(t)
    cell.appendChild(textNode)
    return cell
}

function addExpandedTableEntry(expandedTableEntry: Node, colspan: number){
    let i = table.tBodies[0].rows.length
    let row = appendExpandedTableRow(table)
    // we can do this since we always add a expanded table entry after a normal one
    // I know this is hacky, but it works and i dont wanne mess with it
    row.id = "collapse"  + i
    row.insertCell(-1)
    row.classList.add("collapse")
    let cell = row.insertCell(-1)
    cell.colSpan = colspan

    cell.appendChild(expandedTableEntry)
}


// see https://mdbootstrap.com/docs/jquery/tables/basic/, https://mdbootstrap.com/snippets/jquery/cam/979615
function appendExpandedTableRow(table:HTMLTableElement):HTMLTableRowElement {
    let newRow = table.tBodies[0].insertRow(-1);
    newRow.classList.add("hide-table-padding")
    return newRow
}