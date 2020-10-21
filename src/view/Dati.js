import React, { Component } from 'react'
import { SetTimuList } from '../store/methods'
import { getTimuList } from '../store/asyncMethods'
import store from '../store'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({ ...state })
const mapDispatchToProps = dispatch => {
    return {
        getTimuList: async (page = 0) => {
            const timuList = await getTimuList({ page: 0 })
            dispatch({ type: SetTimuList, timuList })
        }
    }
}

class Dati extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currTimu: null,
            currTimuIndex: 0
        }
    }

    async componentDidMount() {
        if (this.state.currTimu) {

        } else {
            await this.props.getTimuList(0)
            this.setState({
                currTimu: this.props.timuList[0],
                currTimuIndex: 0
            })
        }
    }

    render() {
        const { currTimu, currTimuIndex } = this.state
        const { timuList } = this.props

        return (
          <div className='dati-container'>
              { currTimu?.quiz || '请求中...' }
          </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dati)
