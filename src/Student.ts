
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

const names = [
    "Fives",
    "Echo",
    "Coric",
    "Appo",
    "Fox",
    "Trooper 99",
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
    "trog",
    "proonk",
    "cyo'teg",
    "stil'op",
    "drigev",
    "haarla",
    "Drive",
    "Action",
    "FBB-711",
    "NQW-939",
    "ett",
    "blaarrt",
    "drirryy",
    "vemmaxx",
    "cridden",
    "i'das",
    "Coil",
    "Blades",
    "S-841",
    "IK-481",
    "ett",
    "blaarrt",
    "drirryy",
    "vemmaxx",
    "cridden",
    "i'das",
    "Coil",
    "Blades",
    "S-841",
    "IK-481",
]

function randomStudentList(minSize: number = 5, maxSize: number = 10) {
    let a: Array<Student> = []
    for (let i = 0; i < minSize + Math.random() * (maxSize-minSize); i++) {
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