// Hooks must start with use
import {useEffect, useState} from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);


	useEffect(() => {
		const abortController = new AbortController();

		fetch(url, {signal: abortController.signal}).then(res => {
			if (!res.ok) {
				throw Error("Could not fetch data from " + url);
			}
			return res.json();
		}).then((jsonData) => {
			setData(jsonData);
			setIsLoading(false);
			setError(null)
		}).catch(e => {
			// Failed to load data
			setIsLoading(false);
			setError(e.message);
			if (e.name !== "AbortError") {
				console.log("Fetch from " + url + " aborted");
				setData(false);
			}
		});
		return () => abortController.abort(); // Cancel the fetch if aborted
	}, [url]);

	return {data, isLoading, error};
};

export default useFetch;