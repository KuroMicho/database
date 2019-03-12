const express = require('express')
const router = express.Router()
const db = require('../db/db.js')
router.get('/', async (req, res) => {


  /*   db.select().from('users').then(data => {

        console.log(data)

    }) */

    const response = await db.select().from('users')
    console.log(response)
    res.json(response)
})

module.exports = router



