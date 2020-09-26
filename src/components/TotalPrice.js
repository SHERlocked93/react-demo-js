import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TotalPrice extends Component {
    render() {
        const { income, outcome } = this.props
        return (
          <div>
              <div className='row'>
                  <div className='col income'>总收入 <span>{ income }</span></div>
                  <div className='col outcome'>总支出 <span>{ outcome }</span></div>
              </div>
          </div>
        )
    }
}

TotalPrice.propTypes = {
    income: PropTypes.number.isRequired,
    outcome: PropTypes.number.isRequired
}

export default TotalPrice
