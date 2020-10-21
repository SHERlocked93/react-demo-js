import React, { Component } from 'react'
import { SetTimuList } from '../store/methods'
import { getTimuList } from '../store/asyncMethods'
import store from '../store'
import { connect } from 'react-redux'
import { List, Radio, WhiteSpace, Button, WingBlank } from 'antd-mobile'

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
            // 当前题目
            currTimu: undefined,
            // 当前索引
            currTimuIndex: 0,
            checkedValue: undefined,
            answerResult: []
        }
    }

    async componentDidMount() {
        if (this.state.currTimu) return
        await this.props.getTimuList(0)
        this.setState({
            currTimu: this.props.timuList[0],
            currTimuIndex: 0
        })
    }

    radioCheckedChange = checkedValue => {
        this.setState(state => ({ checkedValue }))
    }

    checkAnswer = () => {
        const answerResult = [...this.state.answerResult]
        const { currTimuIndex, checkedValue, currTimu: { answer } } = this.state
        const { timuList } = this.props

        answerResult[currTimuIndex] = +answer === checkedValue ? 1 : 0
        this.setState(state => ({ answerResult, currTimuIndex: currTimuIndex + 1, currTimu: timuList[currTimuIndex + 1], checkedValue: undefined }))
    }

    render() {
        const { currTimu, currTimuIndex, checkedValue, answerResult } = this.state
        const { timuList } = this.props
        if (!currTimu) return <div>题目获取中...</div>

        const { type, school, quiz, options } = currTimu
        const optionList = JSON.parse(options)?.map((T, idx) => ({ value: idx + 1, label: T }))
        const score = answerResult.reduce((acc, curr) => acc + curr, 0)
        return (
          <div className='dati-container'>
              { `得分： ${ score } / ${ timuList.length }` }
              <List renderHeader={ () => `(${ type } - ${ school }) ${ quiz } ` }>
                  { optionList.map(option => (
                    <Radio.RadioItem key={ option.value }
                                     checked={ checkedValue === option.value }
                                     onChange={ () => this.radioCheckedChange(option.value) }>
                        { option.label }
                    </Radio.RadioItem>
                  )) }
              </List>

              <WhiteSpace/>
              <WingBlank size='lg'>
                  <Button type="primary"
                          style={ { display: checkedValue ? 'block' : 'none' } }
                          onClick={ this.checkAnswer }>确认</Button>
              </WingBlank>
          </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dati)
