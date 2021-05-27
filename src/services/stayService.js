// import { httpService } from './httpService'
import { storageService } from './asyncStorageService'
// import userService from './userService'
// import { utilService } from './utilService'
const KEY_STORAGE = 'stay'
const gStays = require('../data/airbnb.json')
localStorage.setItem(KEY_STORAGE, JSON.stringify(gStays))

export const stayService = {
  add,
  query,
  remove
}


// More ways to send query params:
// return axios.get('api/toy/?id=1223&balance=13')
// return axios.get('api/toy/?', {params: {id: 1223, balanse:13}})

function query(filterBy) {
  // var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
  // return httpService.get(`stay${queryStr}`)
  return storageService.query('stay')
}

function remove(stayId) {
  // return httpService.delete(`stay/${stayId}`)
  return storageService.delete('stay', stayId)

}
async function add(stay) {
  // const addedStay = await httpService.post(`stay`, stay)

  // stay.byUser = userService.getLoggedinUser()
  // stay.aboutUser = await userService.getById(stay.aboutUserId)
  const addedStay = storageService.post('stay', stay)

  return addedStay
}
