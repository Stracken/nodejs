const express = require('express')
const { success } = require('./helper')
const pokemons = require('./mock-pokemon')

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Bonjour jerem'))

app.get('/api/pokemons', (req,res) => {
    const i = pokemons.length
    res.send('Il y a '+i+' de pokemons')
})

app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message = "un pokemon a bien été trouvé"
    res.json(success(message, pokemon))
})

app.listen(port ,() => console.log('http://localhost:'+port))