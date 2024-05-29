

export function Button(title, onClickCallBack) {
    const buttonElement = document.createElement('button')

    buttonElement.append(title)
    buttonElement.addEventListener('click', onClickCallBack)

    return buttonElement
}