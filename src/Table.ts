// All functions that mess with the Table

function addTrToTbl(tbl:HTMLTableElement, tr: Transponder) {
    // get a string array from the transponder
    let a = transponderTableEntryArray(tr)
    addTableEntry(tbl,a)
}


function addTableEntry(table:HTMLTableElement, cells: Array<string>){
    let rowIndex  = addShrinkedTableEntry(table, cells)
    addExpandedTableEntry(table, rowIndex)
}

function addShrinkedTableEntry(table: HTMLTableElement, cells: Array<string>){
    let row = appendShrinkedTableRow(table)
    appendExpandButton(row)
    for (let i = 0; i < cells.length; i++) {
        let cell = row.insertCell(-1)
        cell.classList.add("tableEntry")
        let textNode = document.createTextNode(cells[i])
        cell.appendChild(textNode)
    }
    return row.rowIndex
}

// see https://mdbootstrap.com/docs/jquery/tables/basic/, https://mdbootstrap.com/snippets/jquery/cam/979615
function appendShrinkedTableRow(table:HTMLTableElement):HTMLTableRowElement {
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

function appendExpandButton(row: HTMLTableRowElement){
    let cell = row.insertCell(-1)
    cell.classList.add("expand-button")
}


function addExpandedTableEntry(table: HTMLTableElement, index: number){
    let row = appendExpandedTableRow(table)
    let div = document.createElement("div")
    div.id = "collapse" + index
    div.classList.add("collapse", "in", "p-3")


    //todo refactor and make prettier

    let divRow = document.createElement("div")
    divRow.classList.add("row")

    let divCol = document.createElement("div")
    divCol.classList.add("col-2")

    let txt = document.createTextNode("FOOO BAR")
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