// const stayService = require('./stay.service')
// const socketService = require('../../services/socket.service')
// const logger = require('../../services/logger.service')
const dbService = require('../../services/db.service')


// async function getStay(req, res) {
//     try {
//         const stay = await stayService.getById(req.params.id)
//         res.send(stay)
//     } catch (err) {
//         logger.error('Failed to get stay', err)
//         res.status(500).send({ err: 'Failed to get stay' })
//     }
// }

// async function getStays(req, res) {
//     try {
//         const filterBy = {
//             txt: req.query?.txt || '',
//             minBalance: +req.query?.minBalance || 0
//         }
//         const stays = await stayService.query(filterBy)
//         res.send(stays)
//     } catch (err) {
//         logger.error('Failed to get stays', err)
//         res.status(500).send({ err: 'Failed to get stays' })
//     }
// }

// async function deleteStay(req, res) {
//     try {
//         await stayService.remove(req.params.id)
//         res.send({ msg: 'Deleted successfully' })
//     } catch (err) {
//         logger.error('Failed to delete user', err)
//         res.status(500).send({ err: 'Failed to delete user' })
//     }
// }

// async function updateStay(req, res) {
//     try {
//         const stay = req.body
//         const savedStay = await stayService.update(stay)
//         res.send(savedStay)
//         socketService.broadcast({type: 'stay-updated', data: review, to:savedStay._id})
//     } catch (err) {
//         logger.error('Failed to update stay', err)
//         res.status(500).send({ err: 'Failed to update stay' })
//     }
// }

async function test(req, res){
    const stays = await dbService.getCollection('stay')
    console.log(stays);
    res.send('success!')
}

module.exports = {
    // getStay,
    // getStays,
    // deleteStay,
    // updateStay,
    test
}