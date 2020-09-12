import React from 'react'

class Welcome extends React.Component {
    render() {
        let isLogin = true
        const todoList = ['learn react', 'learn redux']
        const test = <h1>hello react</h1>
        console.log(test)
        return (
          <div>
              <h1 onClick={ () => isLogin = !isLogin }>hello react!</h1>
              <ul>
                  { todoList.map(item => <li>{ item }</li>) }
              </ul>
              登录状态： <strong>{ isLogin ? '已经登陆' : '没有给登陆' }</strong>
          </div>
        )
    }
}

export default Welcome
