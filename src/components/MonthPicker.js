import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { padLeft, range } from '../utility'

class MonthPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            selectedYear: this.props.year
        }
    }

    render() {
        const { year, month, onChange } = this.props
        const { isOpen, selectedYear } = this.state
        const monthRange = range(12, 1)
        const yearRange = range(9, -4).map(T => T + year)

        const selectYear = (ev, yearNum) => {
            ev.preventDefault()
            this.setState({ selectedYear: yearNum })
        }

        const selectMonth = (ev, monthNum) => {
            ev.preventDefault()
            this.setState({ isOpen: false })
            onChange(this.state.selectedYear, monthNum)
        }

        return (
          <div className='dropdown month-picker-component'>
              <h4>选择月份</h4>
              <button className='btn btn-lg btn-secondary dropdown-toggle'
                      onClick={ () => this.setState({ isOpen: !isOpen }) }>
                  { `${ year }年 ${ padLeft(month) }月` }
              </button>
              { isOpen &&
              <div className="dropdown-menu"
                   style={ { display: 'block' } }>
                  <div className='row'>
                      <div className='col border-right'>
                          { yearRange.map((yearNum, idx) =>
                            <a key={ yearNum }
                               onClick={ ev => selectYear(ev, yearNum) }
                               className={ (yearNum === selectedYear) ? 'dropdown-item active' : 'dropdown-item' }
                               href='#'>{ yearNum } 年</a>
                          ) }
                      </div>
                      <div className='col'>
                          { monthRange.map((monthNum, idx) =>
                            <a key={ monthNum }
                               onClick={ ev => selectMonth(ev, monthNum) }
                               className={ (monthNum === month) ? 'dropdown-item active' : 'dropdown-item' }
                               href='#'>{ padLeft(monthNum) } 月</a>
                          ) }
                      </div>
                  </div>
              </div>
              }
          </div>
        )
    }
}

MonthPicker.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default MonthPicker
