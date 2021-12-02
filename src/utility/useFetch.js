import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading("...loading");
    (async () => {
      const source = axios.CancelToken.source();
      try {
        let res = await axios.get(url, { cancelToken: source.token });
        setLoading(false);
        setData(res.data ? res.data : res);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
      return () => source.cancel();
    })();
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
