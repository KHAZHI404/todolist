import { data, closeAddNewTaskDialog, addTask } from "../../../data/data.js"
import { Button } from "../../common/Button/Button.js"


export function AddNewTaskDialog() {
    const container = document.createElement('dialog')
    container.open = data.todolist.addNewTaskDialog.isOpen

    const inputElement = document.createElement("input")
    const saveButtonElement = Button('save', () => { 
        addTask(inputElement.value);
        closeAddNewTaskDialog() 
        })
    const cancelButtonElement = Button('cancel', closeAddNewTaskDialog)

    container.append(
        inputElement,
        saveButtonElement,
        cancelButtonElement,  
    )

    return container
}