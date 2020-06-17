package moe.spooky.lecturer

import tornadofx.*

class MainView : View() {
    override val root = group { label("Hello World") }
}

class TornadoApp : App(MainView::class)

fun main(){
    launch<TornadoApp>()
}