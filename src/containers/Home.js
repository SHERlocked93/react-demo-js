import React, { Component } from 'react'
import logo from '../logo.svg'
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, padLeft, ID, Colors, parseToYearAndMonth } from '../utility'

import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import CreateBtn from '../components/CreateBtn'
import MonthPicker from '../components/MonthPicker'
import TotalPrice from '../components/TotalPrice'

export const catagorys = {
    1: { id: 1, name: '旅行', type: TYPE_OUTCOME, iconName: 'airplane-outline' },
    2: { id: 2, name: '吃饭', type: TYPE_OUTCOME, iconName: 'pizza-outline' },
    3: { id: 3, name: '收入', type: TYPE_INCOME, iconName: 'card-outline' }
}
export const items = [
    { id: 1, price: 100, title: '去云南旅游', date: '2020-08-02', cid: 1 },
    { id: 2, price: 300, title: '下馆子', date: '2020-09-02', cid: 2 },
    { id: 3, price: 700, title: '理财收入', date: '2020-10-02', cid: 3 }
]

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabView: LIST_VIEW,
            items,
            currentDate: parseToYearAndMonth()
        }
    }

    modifyItem = modifiedItem => {
        this.setState({
            items: this.state.items.map(T => {
                if (T === modifiedItem) {
                    T.title += '1'
                }
                return T
            })
        })
    }
    createItem = () => {
        this.setState({
            items: [
                { id: ID(), price: 300, title: '下馆子', date: '2020-01-02', cid: 2 },
                ...this.state.items
            ]
        })
    }
    deleteItem = deletedItem => {
        this.setState({
            items: this.state.items.filter(T => T !== deletedItem)
        })
    }


    render() {
        const { tabView, currentDate, items } = this.state
        let totalIncom = 0, totalOutcom = 0
        const itemsWithCatagory = items.map(T => {
            T.catagory = catagorys[T.cid]
            return T
        }).filter(T => T.date.includes(`${ currentDate.year }-${ padLeft(currentDate.month) }`))
        itemsWithCatagory.forEach(item => {
            if (item.catagory.type === TYPE_OUTCOME) {
                totalOutcom += item.price
            } else {
                totalIncom += item.price
            }
        })

        return (
          <div>
              <React.Fragment>
                  <header className="App-header">
                      <img src={ logo } className="App-logo" alt="logo"/>
                      <div className='row'>
                          <div className='col'>
                              <MonthPicker { ...currentDate }
                                           onChange={ (year, month) => this.setState({ currentDate: { year, month } }) }/>
                          </div>
                          <div className='col'>
                              <TotalPrice income={ totalIncom }
                                          outcome={ totalOutcom }/>
                          </div>
                      </div>
                  </header>
                  <ViewTab activeTab={ tabView } onTabChange={ tabView => this.setState({ tabView }) }/>
                  <CreateBtn onAddPrice={ () => this.createItem() }/>
                  { tabView === LIST_VIEW &&
                  <PriceList items={ itemsWithCatagory }
                             onModifyItem={ item => this.modifyItem(item) }
                             onDeleteItem={ item => this.deleteItem(item) }/>
                  }
                  { tabView === CHART_VIEW &&
                  <h2>chart view</h2> }
              </React.Fragment>
          </div>
        )
    }
}

export default Home
