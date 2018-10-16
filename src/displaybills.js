import React from 'react'
import Bill from './bill'

function DisplayBills(props) {
  return (
    <div>
      <ul>
        <Bill orders={props.orders}/>
      </ul>
    </div>
  )
}
//test

export default DisplayBills
