import { useEffect, useState } from "react";
import { deleteAuthor, getAuthors } from "../../../_services/authors";
import { Link } from "react-router-dom";
import { API, authorImageSTORAGE } from "../../../_api";

export default function AuthorIndex() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    const data = await getAuthors();
    setAuthors(data);
  };

  const token = localStorage.getItem("token");
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure want to delete this author?");

    if (confirmDelete) {
      try {
        await deleteAuthor(id);
        setAuthors(authors.filter((author) => author.id !== id));
      } catch (error) {
        console.error("Failed to delete author:", error);
        alert("Error deleting author");
      }
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Author List
          </h2>
          <Link
            to="/admin/authors/create"
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700"
          >
            Add New Author
          </Link>
        </div>

        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">No</th>
                <th className="px-6 py-3">Photo</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Bio</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {authors.length > 0 ? (
                authors.map((author, index) => (
                  <tr
                    key={author.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4">
                      {author.photo ? (
                        <img
                          src={`${authorImageSTORAGE}/authors/${author.photo}`}
                          alt={author.name}
                          className="w-12 h-12 object-cover rounded-full border"
                        />
                      ) : (
                        <span className="text-gray-400">No photo</span>
                      )}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {author.name}
                    </td>
                    <td className="px-6 py-4">{author.bio}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center space-x-2">
                        <Link
                          to={`/admin/authors/edit/${author.id}`}
                          className="text-white bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(author.id)}
                          className="text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500 dark:text-gray-400"
                  >
                    No authors found.
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
