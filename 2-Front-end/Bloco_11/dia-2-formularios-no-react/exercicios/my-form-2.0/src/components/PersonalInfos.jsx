import React from "react";

class PersonalInfos extends React.Component {
  render() {
    const { handler, blur, nomeValue, emailValue, cpfValue, enderecoValue, cidadeValue } = this.props;

    return(
      <>
        <label>
          Nome:
            <input
              name="name"
              type="text"
              value={ nomeValue }
              maxLength="40"
              autoComplete="off"
              onChange={ handler }>
            </input>
        </label>

        <label>
          Email:
          <input
            name="email"
            type="text"
            value={ emailValue }
            maxLength="50"
            autoComplete="off"
            onChange={ handler }>
          </input>
        </label>

        <label>
        CPF:
          <input
            name="cpf"
            type="text"
            value={ cpfValue }
            maxLength="11"
            autoComplete="off"
            onChange={ handler }>
          </input>
       </label>

       <label>
        Endereço:
          <input
            name="endereco"
            type="text"
            value={ enderecoValue }
            maxLength="200"
            autoComplete="off"
            onChange={ handler }>
          </input>
       </label>

       <label>
        Cidade:
          <input
            name="cidade"
            type="text"
            value={cidadeValue}
            maxLength="28"
            onBlur={ blur }
            onChange={ handler }
            >
          </input>
       </label>
      </>
    )
  }
}

export default PersonalInfos;