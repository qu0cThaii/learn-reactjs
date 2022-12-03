import React from 'react';
import Album from '../Album';
import PropTypes from 'prop-types';
import './style.scss'

Albumlist.propTypes = {
    albumList: PropTypes.array.isRequired,
};

function Albumlist({albumList}) {
    return (
            <ul className='album__list'>
                {albumList.map(album=> (
                    <li key={album.id}>
                        <Album album={album}/>
                    </li>
                ))}
            </ul>
    );
}

export default Albumlist;