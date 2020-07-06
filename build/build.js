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
function addTrToTbl(tbl, tr) {
    // get a string array from the transponder
    var a = transponderTableEntryArray(tr);
    addTableEntry(tbl, a);
}
function addTableEntry(table, cells) {
    addShrinkedTableEntry(table, cells);
    addExpandedTableEntry(table);
}
function addShrinkedTableEntry(table, cells) {
    var row = appendShrinkedTableRow(table);
    appendExpandButton(row);
    for (var i = 0; i < cells.length; i++) {
        var cell = row.insertCell(-1);
        cell.classList.add("tableEntry");
        var textNode = document.createTextNode(cells[i]);
        cell.appendChild(textNode);
    }
}
// see https://mdbootstrap.com/docs/jquery/tables/basic/, https://mdbootstrap.com/snippets/jquery/cam/979615
function appendShrinkedTableRow(table) {
    var newRow = table.tBodies[0].insertRow(-1);
    newRow.classList.add("accordion-toggle", "collapsed");
    var attributes = [
        ["class", "accordion-toggle collapsed"],
        ["id", "accordion1"],
        ["data-toggle", "collapse"],
        ["data-parent", "#accordion1"],
        ["href", "#collapseOne"]
    ];
    attributes.forEach(function (l) {
        newRow.setAttribute(l[0], l[1]);
    });
    return newRow;
}
function appendExpandButton(row) {
    var cell = row.insertCell(-1);
    cell.classList.add("expand-button");
}
function addExpandedTableEntry(table) {
    var row = appendExpandedTableRow(table);
    var div = document.createElement("div");
    div.id = "collapseOne";
    div.classList.add("collapse", "in", "p-3");
    var divRow = document.createElement("div");
    divRow.classList.add("row");
    var divCol = document.createElement("div");
    divCol.classList.add("col-2");
    var txt = document.createTextNode("FOOO BAR");
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
        this.inAusleihe = false;
        this.status = null;
        this.id = id;
        if (inAusleihe) {
            this.inAusleihe = true;
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
var transponderList = randomTransponderList();
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
function transponderTableEntryArray(tr) {
    return [
        "#" + tr.id,
        dateToString(tr.status.originalStart),
        dateToString(tr.status.actualStart),
        fullDateToString(tr.status.end)
    ];
}
function refreshStatusTable() {
    var table = document.getElementById(statusTableID);
    cleanTable(table);
    var entries = statusTableEntries();
    entries.forEach(function (tr, index) {
        addTrToTbl(table, tr);
    });
}
function statusTableEntries() {
    var inAusleihe = transponderList.filter(function (tr) { return tr.inAusleihe; });
    inAusleihe.sort(function (tr1, tr2) {
        return tr1.status.end.getTime() - tr2.status.end.getTime();
    });
    return inAusleihe;
}
function cleanTable(table) {
    var b = table.tBodies[0];
    var size = b.rows.length;
    for (var i = 1; i < size; i++) {
        b.deleteRow(-1);
    }
}
