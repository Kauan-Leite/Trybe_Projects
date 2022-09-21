import React from 'react';
import Pokemon from './Pokemon';
import pokes from '../data';

class ListPoke extends React.Component {

  

  render() {
    return (
      <article>
              <Pokemon dataItem={pokes[1]} key={pokes[0].id}/>
      </article>
    );
  }
}

  export default ListPoke;