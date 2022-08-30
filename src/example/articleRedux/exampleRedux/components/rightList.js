import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

const DATAMEMBERS = 5;

const RightList = ({data, handler}) => {
  let content = [];
  content.push(
    <ul className='userList-list'>
      {
        (0 < data['rightList'].length)?
          data['rightList'].map((entry) => {
            let content_entry = [];
            content_entry.push(
              <li className='userList-entry'>
                <div className='userList-info'>{entry['name']}</div>
                <div className='userList-moveButton' onClick={() => {changeUserHandler(entry);}}><FA icon={['fas', 'caret-square-left']} fixedWidth/></div>
                <div className='userList-deleteButton' onClick={() => {removeUserHandler(entry);}}><FA icon={['fas', 'trash-alt']} fixedWidth/></div>
              </li>
            );
            return content_entry;
          })
          : (<li className='userList-entry-empty'>No data available.</li>)
      }
    </ul>
  );

  function changeUserHandler (entry) {
    if (DATAMEMBERS <= data['leftList'].length)
    {
      alert('Left user is full.');
      return false;
    }
    handler._changeUserHandler(entry);
  }
  function removeUserHandler (entry) {
    handler._removeUserHandler(entry);
  }

  return content;
};

export default RightList;
