import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5050/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch(err => {
        setLoading(false);
        alert("Something went wrong. Check consol");
        console.log(err);
      });
  };
  return (
    <div>
      <BackButton />
      <h1 className="text-3xl my-4">Delete book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure DELET book</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDelete}
        >
          Yes , Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
