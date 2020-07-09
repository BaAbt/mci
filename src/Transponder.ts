
class Transponder {
    id: string = "";
    lendOut: Boolean = false;
    status: TransponderStatus = null;
    constructor(id: string, inAusleihe: boolean) {
        this.id = id;
        if (inAusleihe) {
            this.lendOut = true;
            this.status = randomTransponderStatus();
        }
    }
}

class TransponderStatus {
    rooms: Array<Room> = []
    students: Array<Student> = []
    // this should be its own class, but this will work for now
    responsible: Array<Student> = []
    originalStart: Date = new Date()
    actualStart: Date = new Date()
    end: Date = new Date()
}


function randomTransponderStatus(): TransponderStatus {
    let s = new TransponderStatus
    let now = new Date().getTime()
    let o = now - 10000000 * Math.random()
    let act = o + ((now - o) * Math.random())
    let end = (now-1000000) + 10000000 * Math.random()
    s.originalStart = new Date(o)
    s.actualStart = new Date(act)
    s.end = new Date(end)

    s.students = randomStudentList()
    s.responsible = randomStudentList(0,3)
    let r = roomList[Math.floor(Math.random() * roomList.length)];
    r.occupied = true
    s.rooms = [r]
    return s
}



function randomTransponderList(n: Number = 100): Array<Transponder> {
    let a = Array<Transponder>()
    for (let i = 0; i < n; i++) {
        a.push(randomTransponder())
    }
    return a
}

function randomTransponder(): Transponder {
    let ausgeliehen: boolean = Math.random() < 0.5
    return new Transponder(randomId(4), ausgeliehen)
}

function randomId(length: number): string {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}