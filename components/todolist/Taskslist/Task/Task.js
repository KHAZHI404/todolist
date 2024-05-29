import { deleteTask } from "../../../../data/data.js"
import { Button } from "../../../common/Button/Button.js"


export function Task(task) {
    const container = document.createElement('li')
    const deleteButton = Button('X', () => deleteTask(task.id))
    deleteButton.style.color = 'red'

    container.append(
        task.title,
        deleteButton,
    )

    return container
} 