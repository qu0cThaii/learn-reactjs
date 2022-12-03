import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"
Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({album}) {
    return (
        <div className='album'>
            <div className='album__thumb'>
                <img src={album.thumbnailUrl} alt={album.name} />
                <p>{album.name}</p>
            </div>
        </div>
    );
}

export default Album;