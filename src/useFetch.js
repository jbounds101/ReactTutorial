// Hooks must start with use
import {useEffect, useState} from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url).then(res => {
			if (!res.ok) {
				throw Error("Could not fetch data from " + url);
			}
			return res.json();
		}).then((jsonData) => {
			setData(jsonData);
			setIsLoading(false);
			setError(null)
		}).catch(e => {
			// This occurs if loading fails
			setIsLoading(false);
			setError(e.message);
		})
	}, [url]);

	return {data, isLoading, error};
};

export default useFetch;