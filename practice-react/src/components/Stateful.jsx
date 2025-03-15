import react,{Component} from 'react'
class Stateful extends Component {
    constructor(props) {
    super(props)
    this.state = {
      message:'Hello, World!'
    }
}
  render() {
    return (
      <div>{this.state.message}</div>
    )
  }
}
export default Stateful