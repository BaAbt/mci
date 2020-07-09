
class Student {
    id: number = 0
    name: string = ""
    course: Course = Course.AI
}

enum Course {
    AI,
    MI,
    WI,
}

class Room {
    nr: string = ""
    name: string =""
    occupied: boolean = false
    constructor(number: string, name: string, occupied: boolean){
        this.nr = number
        this.name = name
        this. occupied = occupied
    }
}

function randomRoomList(): Array<Room>{
    let result: Array<Room> = []
    for (let index = 0; index < 100; index++) {
        result.push(randomRoom())
    }
    return result
}
function randomRoom(): Room{
    let roomNames: Array<string> = ["PC-Pool","Labor","Seminarraum","Abstellraum","Hexenkammer","Kammer des Schreckens"]

    return new Room((Math.random()*4+1).toString(),roomNames[Math.floor(Math.random()*roomNames.length)], false)
}


const names = [
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
]

function randomStudentList(){
    let a : Array<Student>= []
    for (let i = 0; i < 1 + Math.random() * 10; i++) {
        a.push(randomStudent())
    }
    return a
}
function randomStudent(): Student{
    let s = new Student()
    s.name = names[Math.floor(Math.random() * names.length)]
    s.id = Math.round((Math.random() * 1000000))
    return s
}