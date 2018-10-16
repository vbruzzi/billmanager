/* constructor(props) {
  super(props)
}
addOrder() {
  const request = [document.querySelector('#requests').value]
  const table = document.querySelector('#table').value
  const dish = document.querySelector('#dish').value
  let req = () => {
    if (req === "") {
      return []
    } else {
      return req
    }
  }
  let orderObj =
  {
      table: table,
      seats: [{[dish]: request},],
  }
  this.props.onAddOrder(orderObj)
  document.querySelector('#table').value = ""
  document.querySelector('#dish').value =  this.props.dishes[0]
  document.querySelector('#requests').value = ""
}
render() {
  let form
  let tablenum
  if (document.querySelector('#table').value !== "") {
    form = <select id="dish">
      {this.props.dishes.map((dish) => {
        return <option key={dish} value={dish}>{dish}</option>
      })}
    </select>
    <input id="requests" type="text">
    </input>
    <button onClick={this.addOrder.bind(this)}>ADD</button>
  }

  </div>
  return (
    <input id="table" type="text"></input>
    <form />
  )
}





<div>
  <input id="table" type="text"></input>
  <select id="dish">
    {this.props.dishes.map((dish) => {
      return <option key={dish} value={dish}>{dish}</option>
    })}
  </select>
  <input id="requests" type="text">
  </input>
  <button onClick={this.addOrder.bind(this)}>ADD</button>
</div>

*/