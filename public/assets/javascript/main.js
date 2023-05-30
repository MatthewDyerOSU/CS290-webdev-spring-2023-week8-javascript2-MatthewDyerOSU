
const categories = [
  { id: 3, name: 'Cruiser' },
  { id: 2, name: 'Dual-Sport' },
  { id: 1, name: 'Naked' },
  { id: 4, name: 'Sport' }
]

const manufacturers = [
  { id: 5, name: 'BMW' },
  { id: 2, name: 'Honda' },
  { id: 1, name: 'Indian' } ,
  { id: 3, name: 'Triumph' },
  { id: 4, name: 'Victory' }
]

document.addEventListener('DOMContentLoaded', bindNavBarClickHandlers)

function bindNavBarClickHandlers(event) {
  let categoriesLink = document.getElementById('lnk-categories')
  categoriesLink.addEventListener('click', displayCategories, false)
}

function displayCategories(event) {
  event.preventDefault()
  console.log("Categories")
  
}
