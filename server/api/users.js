const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./server/data/db.json')
const db = low(adapter);
const router = require('express').Router()

router.get('/', (req, res, next) => {
    const result = db.get('persistant').value()
    res.send(result)
})

router.post('/', (req, res, next) => {
    const newUser = req.body
    db.get('persistant').push(newUser).write()
    db.get('current').push(newUser).write()
    res.send(newUser)
})

router.put('/:name', (req, res, next) => {
    const name = req.params.name
    const updatedUser = req.body
    db.get('persistant').find({name: name}).assign(req.body).write()
    
    if (db.get('current').has({name:name})) db.get('current').find({name: name}).assign(req.body).write()
    res.send(updatedUser)
})

router.delete('/:name', (req, res, next) => {
    const name = req.params.name
    db.get('persistant').remove({ name: name }).write()

    if (db.get('current').has({name:name})) db.get('current').remove({ name: name }).write()
    res.send(200)
})

router.get('/current/', (req,res,next)=> {
    const result = db.get('current').value()
    res.send(result)
})

router.delete('/current/:name', (req,res,next)=> {
    const name = req.params.name
    db.get('current').remove({name: name}).write()
    res.send(200)
})





module.exports = router


