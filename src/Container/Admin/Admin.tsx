import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../axiosApi.ts";
import Spinner from "../../Components/Spinner/Spinner.tsx";

const initialState = {
  title: "",
  content: "",
};

const Admin = () => {
  const [pageName, setPageName] = useState("");
  const [editPage, setEditPage] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchPageOne = useCallback(async (name: string) => {
    setLoading(true);
    try {
      const response = await axiosApi.get(`/pages/${name}.json`);
      if (response.data) {
        setEditPage(response.data);
      } else {
        setEditPage(initialState);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchPageOne(pageName);
  }, [fetchPageOne, pageName]);

  const editTextByInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditPage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const formChange = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (editPage.title.trim() !== "" && editPage.content.trim() !== "") {
      try {
        await axiosApi.put(`/pages/${pageName}.json`, editPage);
        navigate(`/pages/${pageName}`);
      } catch (error) {
        console.error("Error saving page:", error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Fill in the fields");
    }
  };

  const selectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.value;
    console.log(name)
    setPageName(name);
    void fetchPageOne(name);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container w-50 mt-4">
          <h3>Edit Page</h3>
          <label className="form-label mt-3 mb-">Select Page:</label>
          <select
            value={pageName}
            onChange={selectChange}
            className="form-select"
          >
            <option>Select</option>
            <option value="about">About</option>
            <option value="contacts">Contacts</option>
            <option value="divisions">Divisions</option>
            <option value="description">Description</option>
            <option value="services">Services</option>
          </select>
          <form onSubmit={formChange}>
            <label className="form-label mt-3 mb-">Title:</label>
            <input
              className="form-control"
              name="title"
              value={editPage.title}
              onChange={editTextByInput}
            />
            <label className="form-label mt-3 mb-">Content:</label>
            <textarea
              className="form-control"
              name="content"
              value={editPage.content}
              onChange={editTextByInput}
            />
            <button className="mt-4" type="submit">
              Save
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Admin;
