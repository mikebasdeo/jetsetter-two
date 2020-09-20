import React, { Component } from 'react'
import { inject } from 'mobx-react'

@inject('itemList')
class NewItem extends Component {
  state = { value: '' }

  handleChange = (event) => {
    // Do something when the state of this input changes.
    const { value } = event.target
    this.setState({ value })
  }

  handleSubmit = (event) => {
    const { onSubmit } = this.props
    const { value } = this.state

    const { itemList } = this.props
    itemList.addItem(value)

    event.preventDefault()

    console.log({ onSubmit, value })

    this.setState({ value: '' })

    // Do something when a new value is submitted.

    // Reset the state of the component.
  }

  render() {
    const { value } = this.state

    return (
      <form className='NewItem' onSubmit={this.handleSubmit}>
        <input
          className='NewItem-input'
          type='text'
          value={value}
          onChange={this.handleChange}
        />
        <input className='NewItem-submit button' type='submit' />
      </form>
    )
  }
}

export default NewItem
