import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi';

const initialState = {
  title: '',
  content: '',
};

const PageItem = () => {
  const [page, setPage] = useState(initialState);
  const params = useParams();

  const fetchPage = useCallback(async () => {
    try {
      const response = await axiosApi.get(`/pages/${params.pageName}.json`);
      if (response.data) {
        setPage(response.data);
      } else {
        setPage(initialState);
      }
    } catch (error) {
      console.error(error);
    }
  }, [params.pageName]);

  useEffect(() => {
    void fetchPage();
  }, [fetchPage]);

  return (
    <div className="container text-center mt-5">
      <h1>{page.title}</h1>
      <strong>{page.content}</strong>
    </div>
  );
};

export default PageItem;
