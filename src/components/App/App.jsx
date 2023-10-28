import React, { useState } from 'react';
import './App.scss';
import Header from '../Header';
import SortAndFilter from '../SortAndFilter';
import PropertyListing from '../PropertyListing';
import { useFetch } from '../../hooks/useFetch';
import { PROPERTIES_URL_PATH, getPropertyFilters } from '../../api';

const App = () => {
    const [queryParams] = useState(getPropertyFilters());
    const { loading, data: properties, error } = useFetch(PROPERTIES_URL_PATH, queryParams);

    return (
        <div className="App">
            <Header />
            <main>
                <SortAndFilter />
                {loading ? (
                    <span>Loading...</span>
                ) : error ? (
                    <span>{error}</span>
                ) : (
                    <PropertyListing properties={properties} />
                )}
            </main>
        </div>
    );
};

export default App;
