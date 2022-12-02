import axios from "axios";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";

const useCustomQuery = (key: string[], uri: string, reqParam?: any) => {
  const [res, setRes] = useState<any>(null);

  const getRequest = useCallback(async () => {
    setRes(
      useQuery(key, async () => {
        await axios.get("http://localhost:5000/" + uri);
      }),
    );
    // const result = await axios.get("http://localhost:5000/" + uri);
    // setRes(result);
  }, [uri]);

  const postRequest = useCallback(async () => {
    setRes(
      useQuery(key, async () => {
        await axios.post("http://localhost:5000/" + uri, reqParam);
      }),
    );
  }, [uri, reqParam]);

  // setRes(
  //   useQuery(key, async () => {
  //     const result = await axios.get("http://localhost:5000/" + uri);
  //     setRes(result);
  //   }),
  // );

  // setRes(
  //   useQuery(key, async () => {
  //     const result = await axios.post("http://localhost:5000/" + uri, req);
  //     setRes(result);
  //   }),
  // );

  return [res, getRequest, postRequest];
};

export default useCustomQuery;
