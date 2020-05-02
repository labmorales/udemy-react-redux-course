import React from "react";

class SearchBar extends React.Component {
  state = { term: ''};  

  onInputChange = (event) => {         
      this.setState({term: event.target.value});     
  }

  onFormSubmit = (e) => {
      e.preventDefault();

      this.props.onSubmit(this.state.term);
  }

  render(props) {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">

            <label>Search</label>
            <input              
              onChange={this.onInputChange}
              value={this.state.term}
              type="text"
              name="search"
              placeholder="Search for..."
            />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
