import React from 'react'

function CharacterCard({ data }) {
  const { name, image, status, species, gender, origin, location } = data
  return (
    <div className="character__card">
      <img src={image} alt={name} className="character__image" />
      <div className="character__body">
        <h1 className="character__name">{name}</h1>
        <p className="character__initial-info">
          <span className={`character__status-icon ${status}`}></span>
          {status} - {species}
        </p>
        <table className="character__table">
          <tbody>
            <tr>
              <th>Gender: </th>
              <td>{gender}</td>
            </tr>
            <tr>
              <th>Origin: </th>
              <td>{origin.name}</td>
            </tr>
            <tr>
              <th>Location: </th>
              <td>{location.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CharacterCard
