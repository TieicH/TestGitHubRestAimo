import React from "react";

class SearchPage extends React.Component {
  handleApachurrame = () => {
    this.props.history.push("/user/6");
  };
  render() {
    return (
      <>
        <button onClick={this.handleApachurrame}>Apachurrame Wey</button>
        <h1>Search Page</h1>
      </>
    );
  }
}

export default SearchPage;
