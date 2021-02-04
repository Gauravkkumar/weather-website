console.log("App.js Client side")



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageone = document.querySelector('#message-one')
const messagetwo = document.querySelector('#message-two')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageone.textContent = 'Loading....'
    messagetwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageone.textContent = data.error
                console.log(data.error)
            } else {
                messageone.textContent = data.location
                messagetwo.textContent = data.forecastData
                console.log(data.location)
                console.log(data.forecastData)
            }
        })
    })
})