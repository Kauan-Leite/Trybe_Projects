import React from "react";

class Nome extends React.Component {
  render() {
    const { value, handleInput }= this.props;
    return(
      <label>
        Nome:
        <input name="name" value={value} onChange={handleInput} ></input>
      </label>
    )
  }
}

export default Nome;
