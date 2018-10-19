import React from 'react'

function TableCheck(props) {
    if (props.hasTable == true) {
      return (
        <div>
          <label>
            <select value={props.dish} id="dish">
              {props.dishes.map((dish) => {
                return <option key={dish} value={dish}>{dish}</option>
              })}
            </select>
          </label>
          <input id="requests" type="text">
          </input>
          <button onClick={props.addDish}>ADD</button>
          <table>
          <thead>
            <tr>
              <th>Order</th>
            </tr>
          </thead>
            <tbody>
            <tr>
              {props.draft.map((x, index) => {
                return (
                  <div>
                    <td key={index}>{Object.keys(x)}</td>
                    <ul>
                      {Object.values(x).map((y, index2) => (
                        <li key={index2}>{y}</li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </tr>
            </tbody>
          </table>
          <button onClick={props.punchOrder}>
            ADD
          </button>
        </div>
      )
    } else {
      return(
        <div>
          <input
            id="table"
            type="number"
          />
          <button onClick={props.changeState}>ADD</button>
        </div>
      )
    }
  }

  export default TableCheck
