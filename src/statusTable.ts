
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
        ${studentIdListToHtml(tr.status.students)}
      </div>
      <div class="col-sm">
        ${studentIdListToHtml(tr.status.responsible, "Verantwortliche Dozenten:")}
        ${roomListToHtml(tr.status.rooms)}
      </div>
      <div class="col-sm">
      <div class="row">
      <button type="button" class="row btn btn-primary btn-rounded btn-sm return-btn">zurückgegeben</button>
      </div>
      <div class="row">
      <button type="button" class="row btn btn-danger btn-rounded btn-sm return-btn">entziehen</button>
      </div>
      </div>
    </div>
    `
    let buttons = div.querySelectorAll("button")
    buttons[0].addEventListener("click",(e:Event) => removeTransponder(tr, "Transponder " + tr.id + " Zurueckgeben?"))
    buttons[1].addEventListener("click",(e:Event) => removeTransponder(tr, "Ausleihe wirklich abbrechen?"))
    return div
}


function roomListToHtml(a: Array<Room>, caption: string = "Räume:"):string {
    let m = a.map( e => e.nr + ": " + e.name)
    return arrayToHtmlList(m,"Rooms:")
}

function studentIdListToHtml(a: Array<Student>, caption: string = "Studentent:"):string{
    let m = a.map( e => "" + e.id + " - " + e.name)
    return arrayToHtmlList(m,caption)
}

function arrayToHtmlList(array: Array<string>, caption: string = "", ordered: boolean = false, cssClass: string ="") {
    let html = ""
    cssClass = '"'+cssClass+'"'
    if (caption != "")
        html += "<b>" + caption + "</b>"
    if (ordered)
        html += "<ol>"
    else
        html += "<ul>"
        html += array.map(a => "<li class="+cssClass+">" + a + "</li>").join("")
    if (ordered)
        html += "</ol>"
    else
        html += "</ul>"
    return html
}

function removeTransponder(tr: Transponder, message: string = ""){
    let confResp = true
    if (message != "")
        confResp = confirm(message)
    if (confResp){
    tr.lendOut = false
    tr.status = null
    statusTable()
    }
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