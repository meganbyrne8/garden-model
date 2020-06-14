import React, { Component } from 'react'


class EditGarden extends Component {
  state = {
    name: ''
  }

  componentDidMount() {
    if (this.props.garden) {
      this.setGardenForm()
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.garden !== this.props.garden) {
      this.setGardenForm()
    }
  }

  setGardenForm = () => {
    const { name } = this.props.garden
    this.setState({ name })
  }

  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      name: value
    })
  }

  render() {
    const { name } = this.state
    const { updateGarden, history, garden } = this.props

    return (
      <div>
        <h3>Update</h3>

        <form>
          <label htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={this.handleChange} />
        </form>
        <button onClick={(e) => {
          e.preventDefault()
          updateGarden(garden.id, this.state)
          history.push('/')
          this.setState({
            name: ''
          })
        }}>
          Submit
        </button>
      </div>
    )
  }
}

export default EditGarden