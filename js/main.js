const settingsButton = document.querySelector('#settings')
const openPopup = document.querySelector('.popup')
const closePopup = document.querySelector('.close-popup')
settingsButton.addEventListener('click', showPopup)
closePopup.addEventListener('click', deletePopup)

function showPopup() {
    openPopup.showModal()
}
function deletePopup() {
    openPopup.close()
}