// All functions that mess with the Table

class ExpandedTableEntry{
    firstEntry: string
    secondEntry: string
    firstColSpan: number = 2
    secondColspan: number = 2
}

function buildTable(headerCells: Array<string>, rowsCells: Array<Array<string>>, expandedTableEntries: Array<ExpandedTableEntry>){
    setTableHead(headerCells)
    cleanTableBody()
    for (let i = 0; i < rowsCells.length; i++) {
        addShrinkedTableEntry(rowsCells[i])
        addExpandedTableEntry(expandedTableEntries[i])
    }
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

function addExpandedTableEntry(expandedTableEntry: ExpandedTableEntry){
    let i = table.tBodies[0].rows.length
    let row = appendExpandedTableRow(table)
    // we can do this since we always add a expanded table entry after a normal one
    // I know this is hacky, but it works and i dont wanne mess with it
    row.id = "collapse"  + i
    row.insertCell(-1)
    row.classList.add("collapse")
    let cell1 = row.insertCell(-1)
    cell1.colSpan = expandedTableEntry.firstColSpan
    let cell2 = row.insertCell(-1)
    cell2.colSpan = expandedTableEntry.secondColspan

    let div1 = document.createElement("p")
    div1.innerText = expandedTableEntry.firstEntry
    cell1.appendChild(div1)

    let div2 = document.createElement("p")
    div2.innerText = expandedTableEntry.secondEntry
    cell2.appendChild(div2)
}


// see https://mdbootstrap.com/docs/jquery/tables/basic/, https://mdbootstrap.com/snippets/jquery/cam/979615
function appendExpandedTableRow(table:HTMLTableElement):HTMLTableRowElement {
    let newRow = table.tBodies[0].insertRow(-1);
    newRow.classList.add("hide-table-padding")
    return newRow
}