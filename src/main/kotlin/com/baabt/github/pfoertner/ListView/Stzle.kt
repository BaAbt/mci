package com.baabt.github.pfoertner.ListView


import javafx.css.Styleable
import javafx.css.converter.PaintConverter
import javafx.scene.Cursor
import javafx.scene.paint.Color
import javafx.scene.paint.Paint
import tornadofx.*


class MyStyle: Stylesheet() {
    companion object {
        val tackyButton by cssclass()
    }
    init {
        tackyButton {
            fitToWidth = true
            and(hover){
                
            }

        }
    }
}