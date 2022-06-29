import React from "react";

import PersonalInfos from "./PersonalInfos";

class Form extends React.Component {
  constructor() {
    super();

    this.handler = this.handler.bind(this);
    this.blur = this.blur.bind(this);


    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
    }
  }

  handler({target}) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    if(name === 'name') {
      this.setState({
        [name]: value.toUpperCase(),
      })
    } 

    else if(name === 'endereco') {
      this.setState({
        [name]: value.replace(/[^\w\s]/gi, ''),
      })
    } 
    
    else {
      this.setState({
        [name]: value,
      })
    }
  }

  blur() {
    console.log('blur porra')
  }

  render() {
    const { name, email, cpf, endereco, cidade } = this.state;

    return (
      <form>
        <fieldset>
          <h1>Dados Pessoais</h1>
          <PersonalInfos 
            handler={this.handler} 
            bluer={this.blur}
            nomeValue={name} 
            emailValue={email} 
            cpfValue={cpf}
            enderecoValue={endereco}
            cidadeValue={cidade}
          />
        </fieldset>
      </form>
    )
  }
}

export default Form;