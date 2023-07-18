export const actSubmit = (user)=>{
    return{
        type:'SUBMIT_USER',
        payload: user
    }
}

export const actDelete = (id)=>{
    return{
        type:'DELETE_USER',
        payload: id
    }
}
export const actEditUser = (user)=>{
    return{
        type:'EDIT_USER',
        payload: user
    }
}
export const actGetKeyWord = (keyWord)=>{
    return{
        type:'FIND_USER',
        payload: keyWord
    }
}