import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";
import Spinner from "../Spinner/Spinner.tsx";

const initialState = {
  title: "",
  content: "",
};

const PageItem = () => {
  const [page, setPage] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const fetchPage = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosApi.get(`/pages/${params.pageName}.json`);
      if (response.data) {
        setPage(response.data);
      } else {
        setPage(initialState);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [params.pageName]);

  useEffect(() => {
    void fetchPage();
  }, [fetchPage]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container text-center mt-5">
          <h1>{page.title}</h1>
          <strong>{page.content}</strong>
        </div>
      )}
    </>
  );
};

export default PageItem;
