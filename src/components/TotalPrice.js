import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TotalPrice extends Component {
    render() {
        const { income, outcome } = this.props
        return (
          <div>
              <div className='col'>
                  <div className='row'>总收入 { income }</div>
                  <div className='row'>总支出 { outcome }</div>
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
