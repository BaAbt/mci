package com.baabt.github.pfoertner

import com.baabt.github.pfoertner.ListView.PopUp
import javafx.beans.property.SimpleStringProperty
import javafx.stage.StageStyle
import tornadofx.*
import internal.Room
import internal.User

class MasterView : View() {
    val controller:   myController by inject()
    val input = SimpleStringProperty()
    override val root = hbox {
        PersonTable()
    }
}

class myController(): Controller(){
    fun addTransponder(user: User, rooms: List<Room>){
        find<PopUp>().openModal(stageStyle = StageStyle.DECORATED)
        println("added Transponder")
        // TODO()
    }
}

class TornadoApp : App(PersonTable::class)

fun main(){
    launch<TornadoApp>()
}