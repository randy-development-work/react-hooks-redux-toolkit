import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CatList from "./CatList";
import { fetchCats } from "./catsSlice";

function Cats() {
  const catPics = useSelector((state) => state.cats.entities);
  const status = useSelector((state) => state.cats.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>CatBook</h1>
      {status === "loading" ? (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-grow text-danger"
            style={{ width: "10rem", height: "10rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : null}
      <CatList catPics={catPics} />
    </div>
  );
}

export default Cats;
