package com.baabt.github.pfoertner.Login

import com.baabt.github.pfoertner.Login.Styles.Companion.loginScreen

import javafx.beans.property.SimpleBooleanProperty
import javafx.beans.property.SimpleStringProperty
import tornadofx.*

class LoginScreen : View("Please log in") {
    val loginController: LoginController by inject()

    private val model = object : ViewModel() {
        val username = bind { SimpleStringProperty() }
        val password = bind { SimpleStringProperty() }
        val remember = bind { SimpleBooleanProperty() }
    }

    override val root = form {
        addClass(loginScreen)
        fieldset {
            field("Username") {
                textfield(model.username) {
                    required()
                    whenDocked { requestFocus() }
                }
            }
            field("Password") {
                passwordfield(model.password).required()
            }
            field("Remember me") {
                checkbox(property = model.remember)
            }
        }

        button("Login") {
            isDefaultButton = true

            action {
                model.commit {
                    loginController.tryLogin(
                            model.username.value,
                            model.password.value,
                            model.remember.value
                    )
                }
            }
        }
    }

    override fun onDock() {
        model.validate(decorateErrors = false)
    }

    fun clear() {
        model.username.value = ""
        model.password.value = ""
        model.remember.value = false
    }
}
