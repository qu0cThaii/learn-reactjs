import React from 'react';
import AlbumList from './components/AlbumList'
AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhac Hoa thinh hanh',
            thumbnailUrl:'https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp',
        },
        {
            id: 2,
            name: 'Nhac Viet nghe la ghien',
            thumbnailUrl:'https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp',      
        },
        {
            id: 3,
            name: 'Trend lists',
            thumbnailUrl:'https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp',
        },
    ]
    return (
        <div>
            <h2>co the ban se thich</h2>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;