const inputValue = document.querySelector('.add-message')
const inputForm = document.querySelector('.input-message')
const templateMessage = document.querySelector('#message')
const chatList = document.querySelector('.chat-list')
inputForm.addEventListener('submit', submitMessage)

export function submitMessage(event) {
    event.preventDefault()
    const inputMessage = inputValue.value
    const item = templateMessage.content.cloneNode(true)
    item.querySelector('.chat-message').textContent = inputMessage
    chatList.append(item)
    inputValue.value = ''
}