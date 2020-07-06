// All functions that mess with the Table

function buildTable(headerCells: Array<string>, rowsCells: Array<Array<string>>){
    setTableHead(headerCells)
    cleanTableBody()
    rowsCells.forEach (l => {
        addShrinkedTableEntry(l)
        addExpandedTableEntry()
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
        let cell = row.insertCell(-1)
        cell.classList.add("tableEntry")
        let textNode = document.createTextNode(cells[i])
        cell.appendChild(textNode)
    }
    return row.rowIndex
}

// see https://mdbootstrap.com/docs/jquery/tables/basic/, https://mdbootstrap.com/snippets/jquery/cam/979615
function appendShrinkedTableRow():HTMLTableRowElement {
    let newRow = table.tBodies[0].insertRow(-1);
    newRow.classList.add("accordion-toggle", "collapsed")
    let attributes = [
        ["class", "accordion-toggle collapsed"],
        ["id", "accordion1"],
        ["data-toggle", "collapse"],
        ["data-parent", "#accordion1"],
        ["href", "#collapse" + newRow.rowIndex]
    ]
    attributes.forEach(l => {
        newRow.setAttribute(l[0],l[1])
    });
    return newRow
}


function addExpandedTableEntry(){
    let row = appendExpandedTableRow(table)
    let div = document.createElement("div")
    // we can do this since we always add a expanded table entry after a normal one
    // I know this is hacky, but it works and i dont wanne mess with it
    let i = row.rowIndex - 1
    div.id = "collapse"  + i
    div.classList.add("collapse", "in", "p-3")


    //todo this is just giberish. we need to actually create something useful here. maybe pass a div or something.
    //also this is just copied from the link below, I currently have no idea about what classes or divs we use here.

    let divRow = document.createElement("div")
    divRow.classList.add("row")

    let divCol = document.createElement("div")
    divCol.classList.add("col-2")

    let txt = document.createTextNode("FOOO BAR" + i)
    divCol.appendChild(txt)
    divRow.appendChild(divCol)
    div.appendChild(divRow)
    row.appendChild(div)
}

// see https://mdbootstrap.com/docs/jquery/tables/basic/, https://mdbootstrap.com/snippets/jquery/cam/979615
function appendExpandedTableRow(table:HTMLTableElement):HTMLTableRowElement {
    let newRow = table.tBodies[0].insertRow(-1);
    newRow.classList.add("hide-table-padding")
    return newRow
}