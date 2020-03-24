import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment-timezone';

import './css/home.css';

const ListResult = ({ item }) => (
  <div className="searchResultContainer">
    <div className="listItem">
      <div className="listContent">
        <div>
          <h3 className="listTitle"><a href={item.html_url}>{item.full_name}</a></h3>
          <p className="listDesc">{item.description}</p>
          <p className="listDate">Updated on {moment(item.updated_at).format('ddd MMM DD YYYY')}</p>
        </div>
      </div>
      <div className="listProgramming">
        {item.language && 
          <>
          <FontAwesomeIcon icon={faCircle} size="xs" />&nbsp;
          <p>{item.language}</p>
          </>
        }
      </div>
      <div className="listStar">
        <FontAwesomeIcon icon={faStar} size="xs" />&nbsp;
        <p>{item.stargazers_count}</p>
      </div>
    </div>
  </div>
);

export default ListResult;
