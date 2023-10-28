import React from 'react';
import PropTypes from 'prop-types';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const PropertyListing = ({ properties }) => {
    return (
        <ul className="PropertyListing">
            {properties.map((property) => (
                <li key={property.id}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

PropertyListing.propTypes = {
    properties: PropTypes.arrayOf(PropTypes.shape(PropertyCard.propTypes)).isRequired,
};

export default PropertyListing;
