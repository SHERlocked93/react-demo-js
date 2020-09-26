import React from 'react'
import PropTypes from 'prop-types'
import { LIST_VIEW, CHART_VIEW } from '../utility'

const generateLinkClass = (current, view) => {
    return (current === view) ? 'nav-link active' : 'nav-link'
}


const ViewTab = ({ activeTab, onTabChange }) => {
    return (
      <ul className='nav nav-tabs nav-fill my-4'>
          <li className='nav-item'>
              <a href='#' className={ generateLinkClass(activeTab, LIST_VIEW) }
                 onClick={ ev => {
                     ev.preventDefault()
                     onTabChange(LIST_VIEW)
                 } }>
                  <ion-icon name="list-outline"
                            className='rounded-circle mr-2'
                            style={ { fontSize: '20px', verticalAlign: 'text-bottom' } }/>
                  列表模式</a>
          </li>
          <li className='nav-item'>
              <a href='#' className={ generateLinkClass(activeTab, CHART_VIEW) }
                 onClick={ ev => {
                     ev.preventDefault()
                     onTabChange(CHART_VIEW)
                 } }>
                  <ion-icon name="pie-chart-outline"
                            className='rounded-circle mr-2'
                            style={ { fontSize: '20px', verticalAlign: 'text-bottom' } }/>
                  图表模式</a>
          </li>
      </ul>
    )
}

ViewTab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired
}

export default ViewTab
