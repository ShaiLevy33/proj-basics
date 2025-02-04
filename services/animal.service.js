// import { utilService } from './util.service.js'
// import { storageService } from './async-storage.service.js'

// const Animal_KEY = 'animalDB'
// _createAnimals()

 export const animalService = {
//     query,
//     get,
//     remove,
//     save,
//     getEmptyCar,
//     getDefaultFilter,
_createAnimals
 }

// // For Debug (easy access from console):
// // window.cs = carService

// function query(filterBy = {}) {
//     return storageService.query(Animal_KEY)
//         .then(animals => {
//             return animals
//         })
// }
function _createAnimals() {
   var animalInfos = [
        { type: 'Malayan Tiger', count: 787 },
        { type: 'Mountain Gorilla', count: 212 },
        { type: 'Fin Whale', count: 28 },
    ]
    animalInfos.forEach(animal => {
        animal.link = `https://www.google.com/search?q=${encodeURIComponent(animal.type)}`;
    });
    return animalInfos

}