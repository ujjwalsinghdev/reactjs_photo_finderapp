import React from "react"

class SearchBar extends React.Component {
  state = {
    term: ""
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} action="" className="ui form">
          <div className="field">
            <h2>📷 Photo Finder App 🔍 </h2>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value })
              }}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
