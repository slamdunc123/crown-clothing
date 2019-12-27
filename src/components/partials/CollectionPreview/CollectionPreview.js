import React from 'react'

// styles 
import './CollectionPreview.scss';

// components 
import CollectionItem from '../CollectionItem/CollectionItem';

 
const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
           <h1 className='title'>{title.toUpperCase()}</h1> 
           <div className='preview'>
            {
                items
                .filter((item, index) => index < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
           </div>
        </div>
    )
}

export default CollectionPreview;
