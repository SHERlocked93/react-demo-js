import React from 'react'
import PropTypes from 'prop-types'


function PriceList({ items, onModifyItem, onDeleteItem }) {
    return (
      <ul className='list-group list-group-flush'>
          { items.map(item => (
            <li className='list-group-item d-flex justify-content-between align-items-center'
                key={ item.id }>
                <ion-icon style={ { color: '#337df7', fontSize: '30px' } }
                          name={ item.catagory.iconName }/>
                <span className='col-5'>{ item.title }</span>
                <span className='col-2 font-weight-bold'>
                    { (item.catagory.type === 'income' ? '' : '-') }
                    { item.price }元
                </span>
                <span className='col-2'>{ item.date }</span>
                <ion-icon className='col-1'
                          style={ { color: '#337df7', fontSize: '30px' } }
                          name='create'
                          onClick={ () => onModifyItem(item) }/>
                <ion-icon className='col-1'
                          style={ { color: '#cb444b', fontSize: '30px' } }
                          name='trash'
                          onClick={ () => onDeleteItem(item) }/>
            </li>
          )) }
      </ul>
    )
}

PriceList.propTypes = {
    items: PropTypes.array.isRequired,
    onModifyItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired
}

PriceList.defaultProps = {
    onModifyItem: () => console.error('Error: 添加编辑函数 ')
}

export default PriceList
