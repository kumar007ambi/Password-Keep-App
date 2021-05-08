import { ADD_PASSWORD, EDIT_CONTACT, UPDATE_PASSWORD, DELETE_PASSWORD, SELECT_ALL, DELETE_ALL, DELETE_SELECTED_PASSWORDS } from '../constants/types';




export const addPassword = (passwords) => ({
    type: ADD_PASSWORD,
    payload: passwords,
})


//Edit Password 
export const editPassword = (id) => ({
    type: EDIT_CONTACT,
    payload: id
})

//Update password
export const updatePassword = (password) => ({
    type: UPDATE_PASSWORD,
    payload: password,
})

//Delete password
export const deletePassword = (id) => ({
    type: DELETE_PASSWORD,
    payload: id,
})

//slect All Password
export const selectAllPassword = (id) => ({
    type: SELECT_ALL,
    payload: id,
})

// Seleted all password at a time
export const deleteAllSelected = () => ({
    type: DELETE_ALL,

})

//delete all selectetd
export const deleteAll = () => ({
    type: DELETE_SELECTED_PASSWORDS,

})



