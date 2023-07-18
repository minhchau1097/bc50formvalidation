
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actDelete, actEditUser } from '../store/actions'
class Users extends Component {
    renderTable = () => {
        let { listUser, keyWord } = this.props
        listUser = listUser.filter((user) => user.tenSV.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1)

        return listUser?.map((user, index) => {
            return (

                <tr key={index}>
                    <th>{user.maSV}</th>
                    <th>{user.tenSV}</th>
                    <th>{user.soDienThoai}</th>
                    <th>{user.email}</th>
                    <th>
                        <button className='btn btn-danger' onClick={() => {
                            this.props.deleteUser(user.maSV)
                        }}>Xoá</button>
                    </th>
                    <th>
                        <button className='btn btn-primary' onClick={() => {
                            this.props.getEditUser(user)
                        }} >Sửa</button>
                    </th>
                </tr>

            )
        })
    }
    render() {
        return (
            <div>
                <table className="table  py-3 pl-2 mt-5">
                    <thead className='text-light bg-dark'>
                        <tr>
                            <th>Mã SV</th>
                            <th>Họ Tên</th>
                            <th>Số Điện Thoại</th>
                            <th>Email</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}

                    </tbody>
                </table>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (id) => {
            dispatch(actDelete(id))

        },
        getEditUser: (user) => {
            dispatch(actEditUser(user))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        listUser: state.userReducer.listUser,
        keyWord: state.userReducer.keyWord
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)