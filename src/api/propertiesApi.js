export const PROPERTIES_URL_PATH = 'properties';

const defaultOptions = {
    sortBy: 'price',
    orderBy: 'asc',
};

export const getPropertyFilters = (params = {}) => {
    return new URLSearchParams(Object.keys(params).length ? params : defaultOptions).toString();
};
