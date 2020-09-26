import React, { Component } from 'react'
import logo from '../logo.svg'
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, Colors } from '../utility'

import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
// import CreateBtn from '../components/CreateBtn'
// import MonthPicker from '../components/MonthPicker'
// import TotalPrice from '../components/TotalPrice'

const items = [
    { id: 1, price: 100, title: '去云南旅游', date: '2020-01-02', catagory: { id: 1, name: '旅行', type: 'outcome', iconName: 'airplane-outline' } },
    { id: 2, price: 100, title: '去云南旅游', date: '2020-01-02', catagory: { id: 1, name: '旅行', type: 'outcome', iconName: 'airplane-outline' } }
]

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: LIST_VIEW
        }
    }

    render() {
        // let totalIncom = 0, totalOutcom = 0
        // items.forEach(item => {
        //     if (item.catagory.type === TYPE_OUTCOME) {
        //         totalOutcom += item.price
        //     } else {
        //         totalIncom += item.price
        //     }
        // })
        const { activeTab } = this.state

        return (
          <div>
              <React.Fragment>
                  <header className="App-header">
                      <img src={ logo } className="App-logo" alt="logo"/>
                      <div className='row'>
                          {/*<div className='col'>
                          {/*    <MonthPicker year={ 2020 }
                          {/*                 month={ 8 }
                          {/*                 onChange={ () => {} }/>
                          {/*</div>
                          {/*<div className='col'>*/ }
                          {/*    <TotalPrice income={ totalIncom }*/ }
                          {/*                outcome={ totalOutcom }/>*/ }
                          {/*</div>*/ }
                      </div>
                  </header>
                  <ViewTab activeTab={ activeTab } onTabChange={ activeTab => this.setState({ activeTab }) }/>
                  <PriceList items={ items }
                             onModifyItem={ item => console.log('编辑：', item) }
                             onDeleteItem={ item => console.log('删除：', item) }/>
              </React.Fragment>
          </div>
        )
    }
}

export default Home
