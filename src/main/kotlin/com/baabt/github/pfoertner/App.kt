package com.baabt.github.pfoertner
import com.baabt.github.pfoertner.ListView.MyStyle
import com.baabt.github.pfoertner.ListView.Sidebar
import com.baabt.github.pfoertner.Login.Styles
import com.baabt.github.pfoertner.Login.LoginController
import com.baabt.github.pfoertner.Login.LoginScreen
import javafx.stage.Stage
import tornadofx.*


class SidebarApp : App(Sidebar::class,MyStyle::class)

class LoginApp : App(LoginScreen::class, Styles::class) {
    val loginController: LoginController by inject()

    override fun start(stage: Stage) {
        super.start(stage)
        loginController.init()
    }
}

fun main(args: Array<String>) {
    launch<SidebarApp>(args)
}