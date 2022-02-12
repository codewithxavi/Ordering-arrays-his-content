// Escoger un item aleatorio del array
const numbers = [2, 4, 6, 8]
const randomIndex = Math.floor(Math.random() * numbers.length)
numbers[randomIndex]

// Coger sin repetidos
const repetidos = [2, 4, 6, 8, 6, 8, 2, 4, 7, 9]
;[...new Set(repetidos)]

// Aleatoriedad en un arreglo
numbers.sort((a,b) => Math.random() - 0.5)

