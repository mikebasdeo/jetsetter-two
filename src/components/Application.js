import React from 'react'
import NewItem from './NewItem'
import Items from './Items'
import { inject, observer } from 'mobx-react'

const PackedItems = inject('itemList')(
  observer(({ itemList }) => {
    return <Items title='Unpacked Items' items={itemList.packedItems} />
  })
)

const UnpackedItems = inject('itemList')(
  observer(({ itemList }) => {
    return <Items title='Unpacked Items' items={itemList.unpackedItems} />
  })
)

const Application = () => {
  return (
    <div className='Application'>
      <NewItem />
      <PackedItems />
      <UnpackedItems />
      {/* <Items title='Unpacked Items' items={[]} />
      <Items title='Packed Items' items={[]} /> */}
      <button className='button full-width'>Mark All As Unpacked</button>
    </div>
  )
}

export default Application
