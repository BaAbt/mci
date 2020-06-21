package internal

import kotlin.random.Random

data class User (
        val id: Int,
        val name: String,
        val course: Course,
        val studentGroups: MutableList<StudentGroup> = mutableListOf()
)

enum class Course{
    AI,
    MI,
    WI,
}

private fun rUsers(amount: Int= 50): MutableList<User> {
    val l = mutableListOf<User>()
    repeat(amount){
        l.add(User(rId(), rName(), rCourse()))
    }
    return l
}

private val names = listOf<String>(
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
        "Mixer"
)

private fun rId() = Random.nextInt(1000000)
private fun rName():String = names.random()
private fun rCourse() = Course.values().random()

val users = rUsers()

