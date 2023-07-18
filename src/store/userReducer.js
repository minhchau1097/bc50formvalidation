const initialState = {
    listUser: [
        {
            maSV: '1234',
            tenSV: 'Trần Minh Châu',
            soDienThoai: '03833308600',
            email: 'minhchau@gmai.com',
        }, {
            maSV: '4321',
            tenSV: 'Nguyễn Văn A',
            soDienThoai: '09282038272',
            email: 'nguyenvana@gmail.com',
        }
    ],
    listEdit: null,
    keyWord: '',
    

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SUBMIT_USER": {
            let listClone = [...state.listUser]
            let index = listClone.findIndex((user) => user.maSV === action.payload.maSV)
            if (index !== -1) {
                listClone[index] = action.payload
            } else {
                listClone.push(action.payload)
            }
            state.listUser = listClone

            return { ...state }
        }
    
        case 'DELETE_USER': {
            let listClone = [...state.listUser]
            let index = listClone.findIndex((user) => user.maSV === action.payload)
            if (index !== -1) {
                listClone.splice(index, 1)
            }
            state.listUser = listClone
            return { ...state }
        }
        case 'EDIT_USER': {
            state.listEdit = action.payload
            return { ...state }
        }
        case 'FIND_USER': {
            state.keyWord = action.payload
            return { ...state }
        }
        default:

            return { ...state }
    }
}

export default userReducer;