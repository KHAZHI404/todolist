import { openAddNewTaskDialog } from "../../data/data.js"
import { Button } from "../common/Button/Button.js"
import { AddNewTaskDialog } from "./AddNewTaskDialog/AddNewTaskDialog.js"
import { Header } from "./header/Header.js"
import { Taskslist } from "./taskslist/Taskslist.js"


export function Todolist(todolistData) {
    const container = document.createElement('div')
    const headerElement = Header(todolistData.todolist.title)
    const taskslistElement = Taskslist(todolistData.todolist.tasks)
    const addButtonElement = Button('+ add', openAddNewTaskDialog)
    const AddNewTaskDialogElement = AddNewTaskDialog()

    container.append(
        headerElement,
        taskslistElement,
        addButtonElement,
        AddNewTaskDialogElement,
    )
    return container
} 