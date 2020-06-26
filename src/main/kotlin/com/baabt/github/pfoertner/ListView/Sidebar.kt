package com.baabt.github.pfoertner.ListView

import javafx.scene.Parent

import tornadofx.*

class Sidebar :View() {
    override val root: Parent = vbox {
        vbox {
            button("Status")
            button("History")
            button("Transponder")
            button("Ausleihe")
            children.style {
                addClass(MyStyle.tackyButton)
            }
        }
    }
}

fun ptWidth(n:Number) = Dimension(n.toDouble(), Dimension.LinearUnits.pt)

