package internal

data class StudentGroup(
        val rooms: MutableList<Room>,
        val members: MutableList<User>
)