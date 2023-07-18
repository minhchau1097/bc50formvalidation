import React, { Component } from 'react'
import Search from './Search'
import Users from './Users'
import { connect } from 'react-redux'
import { actEditUser, actSubmit } from '../store/actions'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: {
                maSV: '',
                tenSV: '',
                soDienThoai: '',
                email: '',

            },
            error: {
                maSV: '',
                tenSV: '',
                soDienThoai: '',
                email: '',
            },
            formValid: false,
            maValid: false,
            tenValid: false,
            soDienThoaiValid: false,
            emailValid: false,
        }
    }
    handlOnchange = (e) => {
        const { name, value } = e.target;
       
        this.setState({
            value: { ...this.state.value, [name]: value }

        })
    }
    handlValidation = (e) => {
        const { name, value } = e.target;
        let mess = value.trim() ? '' : 'Vui lòng không để trống'
        let { maValid, tenValid, soDienThoaiValid, emailValid } = this.state;
        switch (name) {
            case 'maSV':
                maValid = mess === '' ? true : false;
                if (value && value.trim().length < 4) {
                    mess = 'Vui lòng nhập 4 kí tự trở lên';
                    maValid = false;
                }
                let index = this.props.listUser.findIndex((user) => user.maSV === value)
                if (index !== -1) {
                    mess = 'Mã đã tồn tại'
                    maValid = false;
                }
                break;
            case 'tenSV':
                tenValid = mess === '' ? true : false;
                if (value && !value.match("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$")) {
                    mess= 'Vui lòng nhập tên hợp lệ'
                    tenValid = false;
                }
                break;
            case 'soDienThoai':
                soDienThoaiValid = mess === '' ? true : false;
                if (value && !value.match('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')) {
                    mess = 'Vui lòng nhập số điện thoại hợp lệ'
                    soDienThoaiValid = false;
                }
                break;
            case 'email':
                emailValid = mess === '' ? true : false;
                if (value && !value.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")) {
                    mess = "Vui lòng nhâp email đúng định dạng!";
                    emailValid = false;
                }
                break;

            default:
                break;
        }
        this.setState({
            error: { ...this.state.error, [name]: mess },
            maValid,
            tenValid,
            soDienThoaiValid,
            emailValid,
            formValid: maValid && tenValid && soDienThoaiValid && emailValid
        })
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        
        if (nextProps && nextProps.listEdit) {
            this.setState({
                value: {
                    maSV: nextProps.listEdit.maSV,
                    tenSV: nextProps.listEdit.tenSV,
                    soDienThoai: nextProps.listEdit.soDienThoai,
                    email: nextProps.listEdit.email,

                },
                error: '',
                formValid: true,
                maValid: true,
                tenValid: true,
                soDienThoaiValid: true,
                emailValid: true,
            })
        }
    }
    clearInfor = () => {
        this.setState({
            value: {
                maSV: '',
                tenSV: '',
                soDienThoai: '',
                email: '',

            },
            error: {
                maSV: '',
                tenSV: '',
                soDienThoai: '',
                email: '',
            },
            formValid: false,
            maValid: false,
            tenValid: false,
            soDienThoaiValid: false,
            emailValid: false,
        })
    }
    render() {
        return (
            <div className="container">
                <h1 className="display-4 text-center my-3">Quản lý sinh viên</h1>
                <Search />
                <h3 className=' text-light bg-dark py-3 pl-2'>Thông Tin Sinh Viên</h3>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">Mã SV</label>
                            <input type="number" name='maSV' className="form-control" aria-describedby="helpId" onChange={this.handlOnchange} onBlur={this.handlValidation} value={this.state.value.maSV} disabled={this.props.listEdit ? true : false} />
                            {this.state.error.maSV && (
                                <div className='text-danger '>{this.state.error.maSV}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">Họ Tên</label>
                            <input type="text" name='tenSV' className="form-control" aria-describedby="helpId" onChange={this.handlOnchange} onBlur={this.handlValidation} value={this.state.value.tenSV} />
                            {this.state.error.tenSV && (
                                <div className='text-danger '>{this.state.error.tenSV}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">Số điện thoại</label>
                            <input type="number" name='soDienThoai' className="form-control" aria-describedby="helpId" onChange={this.handlOnchange} onBlur={this.handlValidation} value={this.state.value.soDienThoai} />
                            {this.state.error.soDienThoai && (
                                <div className='text-danger '>{this.state.error.soDienThoai}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="text" name='email' className="form-control" aria-describedby="helpId" onChange={this.handlOnchange} onBlur={this.handlValidation} value={this.state.value.email} />
                            {this.state.error.email && (
                                <div className='text-danger '>{this.state.error.email}</div>
                            )}
                        </div>
                    </div>
                    <div className="col-6">

                        <button
                            className="btn btn-success"
                            onClick={() => {
                                this.props.getNewUser(this.state.value)
                                this.props.removeUser()
                                this.clearInfor()
                            }}
                            disabled={!this.state.formValid}
                        >
                            {this.props.listEdit ? 'Cập nhật' : 'Thêm Sinh Viên'}
                        </button>
                        <button className='btn btn-warning ml-2' style={{ opacity: `${this.props.listEdit ? 1 : 0}` }} disabled={this.props.listEdit ? false : true} onClick={() => {
                            this.props.removeUser()
                            this.clearInfor()
                        }}
                        >{this.props.listEdit ? 'Làm mới' : 1}</button>
                    </div>
                </div>
                <Users />
               
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNewUser: (user) => {
            dispatch(actSubmit(user))

        },
        removeUser: () => {
            dispatch(actEditUser(null))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        listEdit: state.userReducer.listEdit,
        listUser: state.userReducer.listUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);