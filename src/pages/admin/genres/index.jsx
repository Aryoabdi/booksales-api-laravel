import { useEffect, useState } from "react";
import { getGenres, deleteGenre } from "../../../_services/genres";
import { Link } from "react-router-dom";
import { API } from "../../../_api";

export default function GenreIndex() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    const data = await getGenres();
    setGenres(data);
  };

  const token = localStorage.getItem("token");
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure want to delete this genre?");
    if (confirmDelete) {
      try {
        await deleteGenre(id);
        setGenres(genres.filter((genre) => genre.id !== id));
        alert("Genre deleted successfully");
      } catch (error) {
        console.error(error);
        alert("Failed to delete genre");
      }
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Genre List
          </h2>
          <Link
            to="/admin/genres/create"
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700"
          >
            Add New Genre
          </Link>
        </div>

        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">No</th>
                <th className="px-6 py-3">Genre Name</th>
                <th className="px-6 py-3">Description</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {genres.length > 0 ? (
                genres.map((genre, index) => (
                  <tr
                    key={genre.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {genre.name}
                    </td>
                    <td className="px-6 py-4">{genre.description}</td>
                    <td className="px-6 py-4 flex justify-center space-x-2">
                      <Link
                        to={`/admin/genres/edit/${genre.id}`}
                        className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(genre.id)}
                        className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-6 text-gray-500 dark:text-gray-400"
                  >
                    No genres found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
