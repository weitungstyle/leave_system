const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  console.log('get /')
  res.render('index')
})

module.exports = router
