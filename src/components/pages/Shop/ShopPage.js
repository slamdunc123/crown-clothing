import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../partials/CollectionsOverview/CollectionsOverview'
import Collection from '../Collection/Collection'

const ShopPage = ({ match}) => {
    console.log(match)
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={Collection}/>
        </div>
    )
}

export default ShopPage;
