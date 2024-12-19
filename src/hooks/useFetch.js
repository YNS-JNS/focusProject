import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json(); // Parse the response as JSON
                setData(data);
                setError(null);

            } catch (error) {
                setError(error.message);
                setData(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
        
    }, [url]); // se déclenche uniquement si l'URL change

    return { data, error, isLoading };
};

export default useFetch;