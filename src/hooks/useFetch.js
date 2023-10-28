import { useEffect, useState } from 'react';
import { getApi } from '../api';

export const useFetch = (urlPath, urlParams) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            const path = urlParams ? `${urlPath}?${urlParams}` : urlPath;
            const { success, data, message } = await getApi(path);
            if (success) {
                setData(data);
                setError(null);
            } else {
                setData(null);
                setError(message);
            }
            setLoading(false);
        }

        fetchData();
    }, [urlPath, urlParams]);

    return {
        loading,
        data,
        error,
    };
};
