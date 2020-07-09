function roomToExpandedDom(r: Room):Node {
    let div = document.createElement("div")
    div.innerHTML = `
    <div class="row">
      <div class="col-sm">
        html fuer erste collum
      </div>
      <div class="col-sm">
       html fuer zweite
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
