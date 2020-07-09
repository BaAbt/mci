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
    return new Room(randomRoomNumber(),roomNames[Math.floor(Math.random()*roomNames.length)], false)
}

function randomRoomNumber(): string{
    let firstDigit: string = (Math.random()*4+1).toString().charAt(0)
    let secondPart: string = (Math.random()*500+100).toString().split(".")[0]
    let result = firstDigit+"."+secondPart
    return result
}