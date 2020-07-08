
// filters and sorts a list of all currently lend out transponders
function statusTableEntries(): Array<Transponder> {
    let lendOutTrList = transponderList.filter(tr => tr.lendOut)
    lendOutTrList.sort((tr1,tr2) => 
        tr1.status.end.getTime() - tr2.status.end.getTime()
     );
     return lendOutTrList
}

function transponderToExpandedDom(tr:Transponder): Node{
    let div = document.createElement("div")
    div.innerHTML = `
    <div class="row">
      <div class="col-sm">
        ${studentIdList(tr.status.students)}
      </div>
      <div class="col-sm">
        <b>Dozent: ${randomStudent().name}</b>
      </div>
      <button type="button" class="btn btn-primary">zurueckgegeben</button>
    </div>
    `
    let button = div.querySelector("button")
    button.addEventListener("click",(e:Event) => removeTransponder(tr))
    return div
}

function studentIdList(a: Array<Student>):string{
    let m = a.map( e => "" + e.id + " - " + e.name)
    return arrayToHtmlList(m,"Studenten:")
}

function arrayToHtmlList(array: Array<string>, caption: string = "", ordered: boolean = false) {
    let html = ""
    if (caption != "")
        html += "<b>" + caption + "</b>"
    if (ordered)
        html += "<ol>"
    else
        html += "<ul>"

    html += array.map(a => "<li>" + a + "</li>").join("")

    if (ordered)
        html += "</ol>"
    else
        html += "</ul>"
    return html
}

function removeTransponder(tr: Transponder){
    tr.lendOut = false
    tr.status = null
    statusTable()
    //todo popup
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