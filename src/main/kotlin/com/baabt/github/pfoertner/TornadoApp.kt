package com.baabt.github.pfoertner

import javafx.beans.property.SimpleStringProperty
import javafx.stage.StageStyle
import tornadofx.*
import internal.Course
import internal.Room
import internal.User
import javafx.scene.Scene
import javafx.scene.paint.Paint
import javafx.stage.Stage
import java.awt.Color

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