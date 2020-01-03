import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../../redux/directory/directorySelectors';

// components 
import MenuItem from '../MenuItem/MenuItem';

// styles 
import './Directory.scss';

const Directory = ({ sections }) => {
    
        return (
            <div className="directory-menu">
                {sections.map(({ id, ...otherSectionProps }) => (
                   <MenuItem key={id} {...otherSectionProps} /> 
                ))}
                {/* {this.state.sections.map(({ id, title, imageUrl, size }) => (
                   <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} /> 
                ))} */}
            </div>
        )
}

const mapStateToProps  = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);

