import React from 'react';

class About extends React.Component {
  render() {
    const fullname = 'Kauan';
    const descricao = 'Um programador!'
    return (
      <div>
        <h1>
          {fullname}
        </h1>
        <p>
          {descricao}
        </p>
      </div>
    );
  }
}

export default About;