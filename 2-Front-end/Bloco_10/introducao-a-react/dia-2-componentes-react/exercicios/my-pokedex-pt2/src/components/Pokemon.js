import React from "react";

class Pokemon extends React.Component {
  render(){
    const {id, name, type, image, averageWeight} = this.props.dataItem;
    return(
      <section>
        <h1 className="id">{id}</h1>
        <img src={image} alt="" />
        <h1>{name}</h1>
        <h1>{type}</h1>
        <h1>{averageWeight.value} {averageWeight.measurementUnit}</h1>
      </section>
    )
  }
}

export default Pokemon;