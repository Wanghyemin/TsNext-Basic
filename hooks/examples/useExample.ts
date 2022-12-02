import axios from "axios";
import { FormikHelpers, FormikValues } from "formik";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

interface UserNoType {
  id: string;
  userNo: string;
}

export const useExample: any = (inititalValues: FormikValues, formRef: any) => {
  const [getData, setGetData] = useState<any>({ data: inititalValues });
  const [postData, setPostData] = useState<any>();

  //START useQuery ====================================================================
  const getAxios = async () => {
    const res = await axios.get<UserNoType>("http://localhost:5000/getUserNo");
    return res.data;
  };

  const queryRes = useQuery<UserNoType, Error>(["getNo"], getAxios);

  //E N D useQuery ====================================================================
  //START useMutation =================================================================
  const postAxios = async (values: FormikValues) => {
    console.log("register activated");
    const res = await axios.post<FormikValues>("http://localhost:5000/register", values);
    console.log(res);
    return res.data;
  };

  const mutationRes = useMutation(postAxios, {
    onSuccess: (data) => {
      console.log("=== mutation onSuccess ===", data);
      setPostData("SUCCESS");
    },
    onError: (data) => {
      console.log("=== mutation onError ===", data);
      setPostData("ERROR");
    },
  });
  //E N D useMutation ==================================================================
  //START hook functions ===============================================================

  const handlePostMutation = (values: FormikValues, formikHelpers: FormikHelpers<FormikValues>) => {
    console.log(values);
    console.log(mutationRes);
    mutationRes.mutate(values);
  };

  const handleGetQuery = (e: HTMLButtonElement) => {
    console.log(queryRes);
    // formRef.current.setFieldValue("userId", queryRes.data?.userNo);
    setGetData(queryRes);
  };

  //E N D hook functions ===============================================================

  return { getData, postData, handlePostMutation, handleGetQuery };
};
