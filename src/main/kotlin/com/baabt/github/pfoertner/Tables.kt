package com.baabt.github.pfoertner

import internal.StudentGroup
import internal.User
import internal.users
import javafx.scene.layout.HBox
import tornadofx.*
import java.awt.Color

class PersonTable: View(){
    override val root = hbox {
        vbox {
            button("status"){
                minWidth = 200.0
            }
            button("History"){
                minWidth = 200.0
            }
            button("transponder"){
                minWidth = 200.0
            }
        }
        vbox {
            label("search..."){
                minWidth = 1000.0
            }
            tableview(users.asObservable()) {
                minWidth = 1000.0
                readonlyColumn("ID", User::id)
                readonlyColumn("Name", User::name)
                readonlyColumn("Course", User::course)
//        rowExpander() {
//            // todo this must not return a tableview, we can make this pretty
//            tableview(it.studentGroups.asObservable()) {
//                readonlyColumn("members",StudentGroup::members)
//                readonlyColumn("members",StudentGroup::rooms)
//            }
//        }
            }
        }
    }
}


