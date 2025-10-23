import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showAuthor, updateAuthor } from "../../../_services/authors";

export default function AuthorEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    photo: null,
    bio: "",
    _method: "PUT",
  });

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      try {
        const authorData = await showAuthor(id);
        setFormData({
          name: authorData.name || "",
          photo: null,
          bio: authorData.bio || "",
          _method: "PUT",
        });
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = new FormData();
      for (const key in formData) {
        if (key === "photo") {
          if (formData.photo instanceof File) {
            payload.append("photo", formData.photo);
          }
        } else {
          payload.append(key, formData[key]);
        }
      }

      await updateAuthor(id, payload);
      navigate("/admin/authors");
    } catch (error) {
      console.error(error);
      alert("Error updating author");
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Edit Author
        </h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. J.K. Rowling"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Photo
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Short biography of the author..."
              required
              rows="4"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate("/admin/authors")}
              className="text-gray-600 inline-flex items-center hover:text-white border border-gray-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-gray-500 dark:text-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
