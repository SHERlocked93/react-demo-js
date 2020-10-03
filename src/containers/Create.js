import React from 'react'

const Create = ({ match }) => {
    return (
      <div>
          create.js edit match is : { match.params?.id }
      </div>
    )
}

export default Create
