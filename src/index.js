import React from 'react'
import './index.css'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import ItemStore from './store/ItemStore'
import Application from './components/Application'

const itemStore = new ItemStore()

console.log('heartbeat')

ReactDOM.render(
  <Provider itemList={itemStore}>
    <Application />
  </Provider>,
  document.getElementById('root')
)
