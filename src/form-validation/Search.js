import React, { Component } from 'react'
import { actGetKeyWord } from '../store/actions'
import { connect } from 'react-redux'

class Search extends Component {
  handlGetKeyWord = (e) => {
    const keyW = e.target.value
    this.props.getKeyWord(keyW)
  }
  render() {
    return (
      <input
        type="text"
        className="form-control mb-3 w-100"
        onChange={this.handlGetKeyWord}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getKeyWord: (keyWord) => {
      dispatch(actGetKeyWord(keyWord))
    }
  }
}

export default connect(null, mapDispatchToProps)(Search)