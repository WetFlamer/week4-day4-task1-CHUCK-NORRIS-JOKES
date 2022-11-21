
const button = document.createElement('button')
button.textContent = 'ЖМИ'

button.addEventListener('click', async () => {
    const fet = await fetch('https://api.chucknorris.io/jokes/random')
    const joke = await fet.json()
    const p = await document.createElement('p')
    p.textContent = await joke.value
    await document.body.append(p)
})

document.body.append(button)