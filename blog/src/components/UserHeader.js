import React, { Component } from "react";
import { connect } from "react-redux";

export class UserHeader extends Component {
  componentDidMount() {}

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div className="header" key={this.props.userId}>
        {user.name}
      </div>
    );
  }
}

const mapToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapToProps)(UserHeader);
