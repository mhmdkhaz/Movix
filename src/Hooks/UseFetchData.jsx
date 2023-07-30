import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function UseFetchGet(dataAPI, useResult, number, queryParameters) {
  const { data, isLoading, isError, refetch } = useQuery(
    ["movie", dataAPI],
    () => {
      return axios
        .get(
          `${dataAPI}?api_key=ce76e657dd57eb5975b88504a6e86c11${
            queryParameters ? queryParameters : ""
          }${number || number === "" ? number : ""}`
        )
        .then((response) => {
          if (useResult) {
            return response.data.results;
          } else {
            return response.data;
          }
        });
    }
  );

  useEffect(() => {
    refetch();
  }, [dataAPI, number]);

  if (isLoading) {
    return "Loading";
  }
  if (isError) {
    console.log("Error");
  }

  return [data, dataAPI];
}

export default UseFetchGet;
