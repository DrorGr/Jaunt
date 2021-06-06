const express = require('express')
// const {requireAuth, requireAdmin} = require('../../middlewares/requireAuth.middleware')
const {test, getStay, getStays, deleteStay, updateStay} = require('./stay.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

// router.get('/', getStays)
router.get('/', test)
// router.get('/:id', getStay)
// router.put('/:id',  updateStay)

// router.put('/:id',  requireAuth, updateUser)
// router.delete('/:id',  requireAuth, requireAdmin, deleteStay)

module.exports = router