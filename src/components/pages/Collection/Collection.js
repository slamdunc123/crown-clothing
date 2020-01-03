import React from 'react'
import { connect } from 'react-redux';
import CollectionItem from '../../partials/CollectionItem/CollectionItem'

import { selectCollection } from '../../../redux/shop/shopSelectors'

// styles 
import './Collection.scss';

const Collection = ({collection}) => {
    const { title, items } = collection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);