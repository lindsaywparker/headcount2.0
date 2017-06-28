import React from 'react';
import PropTypes, { string, object } from 'prop-types';

import './Card.css';


const Card = ( { location, data } ) => {
  const rows = Object.keys(data);

  return (
    <div>
      <h2 className='district-title'>{location}</h2>
      <table>
        <thead>
          <tr>
            <th>YEAR</th>
            <th>ENROLLMENT</th>
          </tr>
        </thead>
        <tbody>
          {rows.map( year =>
            <tr key={year}>
              <td>{year}</td>
              <td>{data[year]}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

Card.propTypes = {
  location: string,
  data: object
}

export default Card;
