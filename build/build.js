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
var Room = /** @class */ (function () {
    function Room(number, name, occupied) {
        this.nr = "";
        this.name = "";
        this.occupied = false;
        this.nr = number;
        this.name = name;
        this.occupied = occupied;
    }
    return Room;
}());
function randomRoomList() {
    var result = [];
    for (var index = 0; index < 100; index++) {
        result.push(randomRoom());
    }
    return result;
}
function randomRoom() {
    var roomNames = ["PC-Pool", "Labor", "Seminarraum", "Abstellraum", "Hexenkammer", "Kammer des Schreckens"];
    return new Room(randomRoomNumber(), roomNames[Math.floor(Math.random() * roomNames.length)], false);
}
function randomRoomNumber() {
    var firstDigit = (Math.random() * 4 + 1).toString().charAt(0);
    var secondPart = (Math.random() * 500 + 100).toString().split(".")[0];
    var result = firstDigit + "." + secondPart;
    return result;
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
var names = [
    "Fives",
    "Echo",
    "Coric",
    "Appo",
    "Fox",
    "Retired clone trooper",
    "Denal",
    "Kix",
    "Jesse",
    "Dogma",
    "Hardcase",
    "Tup",
    "Kano",
    "Boomer",
    "Sterling",
    "Alpha",
    "Mixer",
];
function randomStudentList(minSize, maxSize) {
    if (minSize === void 0) { minSize = 5; }
    if (maxSize === void 0) { maxSize = 10; }
    var a = [];
    for (var i = 0; i < minSize + Math.random() * (maxSize - minSize); i++) {
        a.push(randomStudent());
    }
    return a;
}
function randomStudent() {
    var s = new Student();
    s.name = names[Math.floor(Math.random() * names.length)];
    s.id = Math.round((Math.random() * 1000000));
    return s;
}
// All functions that mess with the Table
var ExpandedTableEntry = /** @class */ (function () {
    function ExpandedTableEntry() {
        this.firstColSpan = 2;
        this.secondColspan = 2;
    }
    return ExpandedTableEntry;
}());
function buildTable(headerCells, rowsCells, expandedTableEntries) {
    if (expandedTableEntries === void 0) { expandedTableEntries = []; }
    setTableHead(headerCells);
    cleanTableBody();
    for (var i = 0; i < rowsCells.length; i++) {
        addShrinkedTableEntry(rowsCells[i]);
        if (expandedTableEntries[i] != null)
            addExpandedTableEntry(expandedTableEntries[i], rowsCells[i].length);
    }
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
        appendTextCell(row, cells[i]);
    }
    return row.rowIndex;
}
// see https://mdbootstrap.com/docs/jquery/tables/basic/, https://mdbootstrap.com/snippets/jquery/cam/979615
function appendShrinkedTableRow() {
    var newRow = table.tBodies[0].insertRow(-1);
    newRow.classList.add("accordion-toggle", "collapsed");
    var attributes = [
        ["data-toggle", "collapse"],
        ["href", "#collapse" + newRow.rowIndex],
        ["aria-expanded", "false"],
    ];
    attributes.forEach(function (l) {
        newRow.setAttribute(l[0], l[1]);
    });
    return newRow;
}
function appendTextCell(row, t) {
    var cell = row.insertCell(-1);
    cell.classList.add("tableEntry");
    var textNode = document.createTextNode(t);
    cell.appendChild(textNode);
    return cell;
}
function addExpandedTableEntry(expandedTableEntry, colspan) {
    var i = table.tBodies[0].rows.length;
    var row = appendExpandedTableRow(table);
    // we can do this since we always add a expanded table entry after a normal one
    // I know this is hacky, but it works and i dont wanne mess with it
    row.id = "collapse" + i;
    row.insertCell(-1);
    row.classList.add("collapse");
    var cell = row.insertCell(-1);
    cell.colSpan = colspan;
    cell.appendChild(expandedTableEntry);
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
        // this should be its own class, but this will work for now
        this.responsible = [];
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
    s.students = randomStudentList();
    s.responsible = randomStudentList(0, 3);
    var r = roomList[Math.floor(Math.random() * roomList.length)];
    r.occupied = true;
    s.rooms = [r];
    return s;
}
function randomTransponderList(n) {
    if (n === void 0) { n = 100; }
    var a = Array();
    for (var i = 0; i < n; i++) {
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
// this needs first
var roomList = randomRoomList();
// this needs second
var transponderList = randomTransponderList();
var statusTableHeader = ["Transponder ID", "Originaler Ausleihzeitpunkt", "tatsächlicher Ausleihyeitpunkt", "Ausleihfrist"];
var historyTableHeader = ["Begin", "Ende", "Raeume", "Verantwortliche"];
var roomsTableHeader = ["Nummer", "Bezeichnung", "Belegt"];
var table = document.getElementById("DynamicTable");
//onload, we want to create the status table
statusTable();
// creates the status table
function statusTable() {
    var entries = statusTableEntries();
    var shrinkedEntries = entries.map(function (tr) { return transponderToStatusEntry(tr); });
    var expandedEntries = entries.map(function (tr) { return transponderToExpandedDom(tr); });
    buildTable(statusTableHeader, shrinkedEntries, expandedEntries);
}
function historyTable() {
    var entries = [["not required", " will be added later"]]; // todo filter and create entries
    buildTable(historyTableHeader, entries, []);
}
function roomTable() {
    var entries = roomList;
    var shrinkedEntries = entries.map(function (r) { return roomToShrinkedEntry(r); });
    var expandedEntries = entries.map(function (r) { return roomToExpandedDom(r); });
    buildTable(roomsTableHeader, shrinkedEntries, expandedEntries);
}
function roomToExpandedDom(r) {
    var div = document.createElement("div");
    var transponders = randomTransponderList(6);
    var transponderIds = transponders.map(function (element) { return "#" + element.id; });
    div.innerHTML = "\n    <div class=\"row\">\n      <div class=\"col-sm\">  \n      <p style=\"margin-top:10px; margin-bottom:5px; margin-left:11px;\"> Assoziierte Transponder </p>\n      " + arrayToHtmlList(transponderIds, "", true, "associatedTransponder") + "\n      </div>\n      <div class=\"col-sm\">\n      </div>\n    </div>\n    ";
    return div;
}
function roomToShrinkedEntry(r) {
    return [
        r.nr,
        r.name,
        r.occupied.toString()
    ];
}
// filters and sorts a list of all currently lend out transponders
function statusTableEntries() {
    var lendOutTrList = transponderList.filter(function (tr) { return tr.lendOut; });
    lendOutTrList.sort(function (tr1, tr2) {
        return tr1.status.end.getTime() - tr2.status.end.getTime();
    });
    return lendOutTrList;
}
function transponderToExpandedDom(tr) {
    var div = document.createElement("div");
    div.innerHTML = "\n    <div class=\"row\">\n      <div class=\"col-sm\">\n        " + studentIdListToHtml(tr.status.students) + "\n      </div>\n      <div class=\"col-sm\">\n        " + studentIdListToHtml(tr.status.responsible, "Verantwortliche Dozenten:") + "\n        " + roomListToHtml(tr.status.rooms) + "\n      </div>\n      <div class=\"col-sm\">\n      <div class=\"row\">\n      <button type=\"button\" class=\"row btn btn-primary btn-rounded btn-sm return-btn\">zurueckgegeben</button>\n      </div>\n      <div class=\"row\">\n      <button type=\"button\" class=\"row btn btn-danger btn-rounded btn-sm return-btn\">Ausleihe abbrechen</button>\n      </div>\n      </div>\n    </div>\n    ";
    var buttons = div.querySelectorAll("button");
    buttons[0].addEventListener("click", function (e) { return removeTransponder(tr, "Transponder " + tr.id + " Zurueckgeben?"); });
    buttons[1].addEventListener("click", function (e) { return removeTransponder(tr, "Ausleihe wirklich abbrechen?"); });
    return div;
}
function roomListToHtml(a, caption) {
    if (caption === void 0) { caption = "Räume:"; }
    var m = a.map(function (e) { return "" + e.name; });
    return arrayToHtmlList(m, "Rooms:");
}
function studentIdListToHtml(a, caption) {
    if (caption === void 0) { caption = "Studentent:"; }
    var m = a.map(function (e) { return "" + e.id + " - " + e.name; });
    return arrayToHtmlList(m, caption);
}
function arrayToHtmlList(array, caption, ordered, cssClass) {
    if (caption === void 0) { caption = ""; }
    if (ordered === void 0) { ordered = false; }
    if (cssClass === void 0) { cssClass = ""; }
    var html = "";
    cssClass = '"' + cssClass + '"';
    if (caption != "")
        html += "<b>" + caption + "</b>";
    if (ordered)
        html += "<ol>";
    else
        html += "<ul>";
    html += array.map(function (a) { return "<li class=" + cssClass + ">" + a + "</li>"; }).join("");
    if (ordered)
        html += "</ol>";
    else
        html += "</ul>";
    return html;
}
function removeTransponder(tr, message) {
    if (message === void 0) { message = ""; }
    var confResp = true;
    if (message != "")
        confResp = confirm(message);
    if (confResp) {
        tr.lendOut = false;
        tr.status = null;
        statusTable();
    }
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
