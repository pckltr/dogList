export const addDog = dogType => ({
    type: 'ADD_DOG',
    data: dogType
})

export const removeDog = dogType => ({
    type: 'REMOVE_DOG',
    data: dogType
})