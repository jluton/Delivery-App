class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      currentOrders: null
    }
  }

  render () {
    return (
      <div> 
        <SubmitOrder />
      </div>
    );
  }
}