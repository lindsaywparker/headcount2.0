import React from 'react';
import { string, object, bool, func } from 'prop-types';
import './Card.css';

const Card = ( { location, data, average, selected, toggleSelected } ) => {
  const rows = Object.keys(data).reverse();
  const activeClass = selected === true ? 'active' : 'inactive';

  return (
    <div className={'card ' + activeClass} onClick={() => toggleSelected(location)}>
      <h2 className='district-title'>{location}</h2>
      {selected && <p className='average'>Average: {(average * 100).toFixed(1)}%</p>}
      <table>
        <thead>
          <tr>
            <th>YEAR</th>
            <th>ENROLLMENT</th>
          </tr>
        </thead>
        <tbody>
          {rows.map( year => {
            let color;
            if (data[year] >= 0.5) {
              color = 'rgba(84, 208, 237, ';
            } else {
              color = 'rgba(237, 113, 84, ';
            }
            const opacity = Math.abs(data[year]-0.5) / 0.5;
            color = color + opacity + ')';
            const style = {backgroundColor: color};

            return (
              <tr key={year}>
                <td>{year}</td>
                <td style={style}>{(data[year] * 100).toFixed(1)}%</td>
              </tr>
            )}
          )}
        </tbody>
      </table>
    </div>
  )
}

Card.propTypes = {
  location: string,
  data: object,
  selected: bool,
  toggleSelected: func
}

export default Card;
