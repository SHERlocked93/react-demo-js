import React from 'react'

import ThemeContext from '../theme-context'

const ThemedBar = () => {
    return (
      <ThemeContext.Consumer>
          {
              theme => {
                  return (
                    <div className='alert mt-5'
                         style={
                             { backgroundColor: theme.bgColor, color: theme.color }
                         }>
                        样式区域
                        <div className={ theme.classnames }>🔘 样式按钮</div>
                    </div>
                  )
              }
          }
      </ThemeContext.Consumer>
    )
}

export default ThemedBar
