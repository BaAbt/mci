function roomToExpandedDom(r: Room):Node {
    let div = document.createElement("div")
    let transponders = randomTransponderList(6)
    let transponderIds: Array<string> = transponders.map(element => "#"+element.id)
    div.innerHTML = `
    <div class="row">
      <div class="col-sm">  
      <p style="margin-top:10px; margin-bottom:5px; margin-left:11px;"> Assoziierte Transponder </p>
      ${arrayToHtmlList(transponderIds,"",true,"associatedTransponder")}
      </div>
      <div class="col-sm">
      </div>
    </div>
    `
    return div

}

function roomToShrinkedEntry(r:Room): Array<string>{
    return [
            r.nr,
            r.name,
            r.occupied.toString()
    ]
}

