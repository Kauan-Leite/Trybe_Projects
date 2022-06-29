import React from "react";

class Sobrenome extends React.Component {
  render() {
    const { value, handleInput } = this.props;
    return(
      <label>
        Sobrenome:
          <input name="lastname" value={value} onChange={handleInput}></input>
        { value.length > 20 ? 'ta escrevendo a biblia?' : 'de-boa'}
      </label>
    )
  }
}

export default Sobrenome;
