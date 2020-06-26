var TrTblID = "statusTable";
var statusTableID = "statusTable";
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
var Transponder = /** @class */ (function () {
    function Transponder(id, inAusleihe) {
        this.id = "";
        this.inAusleihe = false;
        this.status = null;
        this.id = id;
        if (inAusleihe) {
            this.inAusleihe = true;
            this.status = new TransponderStatus;
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
var Room = /** @class */ (function () {
    function Room() {
        this.id = 0;
        this.nr = "";
    }
    return Room;
}());
function addTrToTbl(tr) {
    // Get a reference to the table
    var table = document.getElementById(statusTableID);
    var newRow = table.tBodies[0].insertRow(-1);
    var trId = newRow.insertCell(0);
    var vorZeit = newRow.insertCell(1);
    var ausgeliehenSeit = newRow.insertCell(2);
    trId.appendChild(document.createTextNode("#" + tr.id));
    vorZeit.appendChild(document.createTextNode(dateToString(tr.status.originalStart) +
        " - " +
        dateToString(tr.status.end)));
    ausgeliehenSeit.appendChild(document.createTextNode(dateToString(tr.status.actualStart)));
}
// formats the date for that pretty printing
function dateToString(d) {
    var now = new Date();
    var s = "";
    var minDiff = now.getMinutes() - d.getMinutes();
    if (minDiff < 2) {
        return "just now";
    }
    else if (minDiff <= 5) {
        return minDiff + "Minutes ago";
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
    var time = d.getHours() + ":" + d.getMinutes();
    return day + " - " + time;
}
function refreshStatusTable() {
    var table = document.getElementById(statusTableID);
    var new_tbody = document.createElement('tbody');
    table.replaceChild(new_tbody, table.tBodies[0]);
    // todo filter um nur in ausleihe zu verwenden
    transponderList.forEach(function (tr, index) {
        addTrToTbl(tr);
    });
}
var transponderList = [
    new Transponder("1234", true),
    new Transponder("1923", true)
];
function createEntry() {
    var tbl = document.getElementById("testTable");
    var entry = tbl.insertRow(-1);
    var newCell = entry.insertCell(0);
    var newText = document.createTextNode('New bottom row');
    newCell.appendChild(newText);
}
function delEntry() {
    var tbl = document.getElementById("testTable");
    var entry = tbl.deleteRow(-1);
}
//# sourceMappingURL=script.js.map