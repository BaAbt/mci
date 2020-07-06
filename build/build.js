// formats the date for that pretty printing
function dateToString(d) {
    var now = new Date();
    var s = "";
    var minDiff = (now.getTime() - d.getTime()) * 1000 * 60;
    if (minDiff < 2) {
        return "Vor einem Moment";
    }
    else if (minDiff <= 5) {
        return "Vor " + minDiff + " Minuten";
    }
    else {
        return fullDateToString(d);
    }
}
function fullDateToString(d) {
    var now = new Date();
    var s = "";
    var day = "";
    if (d.getDay() == now.getDay()) {
        day = "heute";
    }
    else if (now.getDay() - d.getDay() == 1) {
        day = "gestern";
    }
    else {
        day = d.getDay + "." + d.getMonth + "." + d.getFullYear;
    }
    var hours = d.getHours().toString();
    if (hours.length == 1)
        hours = "0" + hours;
    var minutes = d.getMinutes().toString();
    if (minutes.length == 1)
        minutes = "0" + minutes;
    var time = hours + ":" + minutes;
    return day + " - " + time;
}
var Student = /** @class */ (function () {
    function Student() {
        this.id = 0;
        this.name = "";
        this.course = Course.AI;
    }
    return Student;
}());
var Course;
(function (Course) {
    Course[Course["AI"] = 0] = "AI";
    Course[Course["MI"] = 1] = "MI";
    Course[Course["WI"] = 2] = "WI";
})(Course || (Course = {}));
var Room = /** @class */ (function () {
    function Room() {
        this.id = 0;
        this.nr = "";
    }
    return Room;
}());
// All functions that mess with the Table
function buildTable(headerCells, rowsCells) {
    setTableHead(headerCells);
    cleanTableBody();
    rowsCells.forEach(function (l) {
        addShrinkedTableEntry(l);
        addExpandedTableEntry();
    });
}
function cleanTableBody() {
    var b = table.tBodies[0];
    if (b == null)
        b = table.createTBody();
    var size = b.rows.length;
    for (var i = 0; i < size; i++) {
        b.deleteRow(-1);
    }
}
function setTableHead(cells) {
    var head = table.createTHead();
    head.deleteRow(-1);
    var row = head.insertRow(-1);
    // all of our tables are expandable, so we add the place for the button every time
    var th = document.createElement("th");
    th.innerHTML = "#";
    row.appendChild(th);
    // add all the header strings
    for (var i = 0; i < cells.length; i++) {
        var th_1 = document.createElement("th");
        th_1.innerHTML = cells[i];
        row.appendChild(th_1);
    }
}
function addShrinkedTableEntry(cells) {
    var row = appendShrinkedTableRow();
    // expand button at the start Button
    var cell = row.insertCell(-1);
    cell.classList.add("expand-button");
    // Adds all the cells 
    for (var i = 0; i < cells.length; i++) {
        var cell_1 = row.insertCell(-1);
        cell_1.classList.add("tableEntry");
        var textNode = document.createTextNode(cells[i]);
        cell_1.appendChild(textNode);
    }
    return row.rowIndex;
}
// see https://mdbootstrap.com/docs/jquery/tables/basic/, https://mdbootstrap.com/snippets/jquery/cam/979615
function appendShrinkedTableRow() {
    var newRow = table.tBodies[0].insertRow(-1);
    newRow.classList.add("accordion-toggle", "collapsed");
    var attributes = [
        ["class", "accordion-toggle collapsed"],
        ["id", "accordion1"],
        ["data-toggle", "collapse"],
        ["data-parent", "#accordion1"],
        ["href", "#collapse" + newRow.rowIndex]
    ];
    attributes.forEach(function (l) {
        newRow.setAttribute(l[0], l[1]);
    });
    return newRow;
}
function addExpandedTableEntry() {
    var row = appendExpandedTableRow(table);
    var div = document.createElement("div");
    // we can do this since we always add a expanded table entry after a normal one
    // I know this is hacky, but it works and i dont wanne mess with it
    var i = row.rowIndex - 1;
    div.id = "collapse" + i;
    div.classList.add("collapse", "in", "p-3");
    //todo this is just giberish. we need to actually create something useful here. maybe pass a div or something.
    //also this is just copied from the link below, I currently have no idea about what classes or divs we use here.
    var divRow = document.createElement("div");
    divRow.classList.add("row");
    var divCol = document.createElement("div");
    divCol.classList.add("col-2");
    var txt = document.createTextNode("FOOO BAR" + i);
    divCol.appendChild(txt);
    divRow.appendChild(divCol);
    div.appendChild(divRow);
    row.appendChild(div);
}
// see https://mdbootstrap.com/docs/jquery/tables/basic/, https://mdbootstrap.com/snippets/jquery/cam/979615
function appendExpandedTableRow(table) {
    var newRow = table.tBodies[0].insertRow(-1);
    newRow.classList.add("hide-table-padding");
    return newRow;
}
var Transponder = /** @class */ (function () {
    function Transponder(id, inAusleihe) {
        this.id = "";
        this.lendOut = false;
        this.status = null;
        this.id = id;
        if (inAusleihe) {
            this.lendOut = true;
            this.status = randomTransponderStatus();
        }
    }
    return Transponder;
}());
var TransponderStatus = /** @class */ (function () {
    function TransponderStatus() {
        this.rooms = [];
        this.students = [];
        this.originalStart = new Date();
        this.actualStart = new Date();
        this.end = new Date();
    }
    return TransponderStatus;
}());
function randomTransponderStatus() {
    var s = new TransponderStatus;
    var now = new Date().getTime();
    var o = now - 10000000 * Math.random();
    var act = o + ((now - o) * Math.random());
    var end = now + 10000000 * Math.random();
    s.originalStart = new Date(o);
    s.actualStart = new Date(act);
    s.end = new Date(end);
    return s;
}
function randomTransponderList() {
    var a = Array();
    for (var i = 0; i < 100; i++) {
        a.push(randomTransponder());
    }
    return a;
}
function randomTransponder() {
    var ausgeliehen = Math.random() < 0.5;
    return new Transponder(randomId(4), ausgeliehen);
}
function randomId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
var TrTblID = "statusTable";
var statusTableID = "statusTable";
var transponderList = randomTransponderList();
var statusTableHeader = ["Transponder ID", "Originaler Ausleihzeitpunkt", "tatsächlicher Ausleihyeitpunkt", "Ausleihfrist"];
var historyTableHeader = ["Begin", "Ende", "Raeume", "Verantwortliche"];
var personsTableHeader = ["Name", "Martikelnummer", "Kurs"];
var table = document.getElementById("DynamicTable");
//onload, we want to create the status table
statusTable();
// creates the status table
function statusTable() {
    var entries = statusTableEntries().map(function (tr) {
        return transponderToStatusEntry(tr);
    });
    // todo find out what to to with the expandable
    buildTable(statusTableHeader, entries);
}
// filters and sorts a list of all currently lend out transponders
function statusTableEntries() {
    var lendOutTrList = transponderList.filter(function (tr) { return tr.lendOut; });
    lendOutTrList.sort(function (tr1, tr2) {
        return tr1.status.end.getTime() - tr2.status.end.getTime();
    });
    return lendOutTrList;
}
// Builds an Array of strings from one Transponder which will represent one table array
function transponderToStatusEntry(tr) {
    return [
        "#" + tr.id,
        dateToString(tr.status.originalStart),
        dateToString(tr.status.actualStart),
        fullDateToString(tr.status.end)
    ];
}
function historyTable() {
    var entries = [["FOO", "BAR"]]; // todo filter and create entries
    buildTable(historyTableHeader, entries);
}
function personTable() {
    var entries = [["FOO", "BAR"]]; // todo filter and create entries
    buildTable(personsTableHeader, entries);
}
