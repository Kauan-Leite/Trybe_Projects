import React from 'react';
import Pokemon from './Pokemon';
import pokes from '../data';

class ListPoke extends React.Component {
  render() {
    return (
      <article>
        {
          pokes.map((poke) => {
            return (
              <Pokemon dataItem={poke} key={poke.id}/>
            );
          })
        }
      </article>
    );
  }
}

  export default ListPoke;