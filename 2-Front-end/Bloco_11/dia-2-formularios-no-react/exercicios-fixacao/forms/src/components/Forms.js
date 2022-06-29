import React from "react";
import Nome from "./Nome";
import Sobrenome from "./Sobrenome";

class Forms extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      name: '',
      lastname: '',
      time: '',
      aboutTeam: '',
      ganhando: 'false',
    }
  }

  handleInput({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return(
      <form>
        <fieldset>
          About You
         <Nome value={this.state.name} handleInput={this.handleInput}/>
         <Sobrenome value={this.state.lastname} handleInput={this.handleInput}/>

          
        </fieldset>

        <fieldset>
          AboutTeam
            <label>
            Time:
          <select name="time" value={this.state.time} onChange={this.handleInput}>
            <option value='imperial'>Imperial</option>
            <option value='furia'>Furia</option>
            <option value='mibr'>Mibr</option>
          </select>
          </label>

          <label>
            Fale Sobre o seu time:
            <textarea name="aboutTeam" onChange={this.handleInput}></textarea>
          </label>

          <label>
            Seu time ta ganhando?
            <input name="ganhando" type='checkbox' onChange={this.handleInput}></input>
          </label>

          <input type="file" />
        </fieldset>
      </form>
    )
  }
}

export default Forms;
