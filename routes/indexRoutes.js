// Require
const express = require('express')

const router = express.Router()

// Check if Authenticated
const { requireAuth } = require('../app')

// Dashboard Routes
router.get('/', requireAuth, (req, res) => {
    res.render('dashboard', {
        user: req.user.name
    })
})

// Export Router
module.exports = router