import React from 'react'
import PropTypes from 'prop-types'

const CreateBtn = ({ onAddPrice }) => {
    return (
      <div>
          <button className='btn btn-primary btn-block d-flex justify-content-center align- items-center'
                  onClick={ () => onAddPrice() }>
              <ion-icon name="add-circle-outline"
                        className='rounded-circle mr-2'
                        style={ { fontSize: '20px', verticalAlign: 'text-bottom' } }/>
              创建一条新的记账记录
          </button>
      </div>
    )
}

CreateBtn.propTypes = {
    onAddPrice: PropTypes.func.isRequired
}

export default CreateBtn
