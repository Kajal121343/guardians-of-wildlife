import { useEffect, useState } from "react";
import BlogCard from "../components/blog/BlogCard";

const BLOG_API = "https://sheet2api.com/v1/6qZoTuxSj6OD/blog";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BLOG_API)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-10 text-lg">
        Loading blogs...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-10">
        Wildlife Conservation Blogs
      </h1>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-600">
          No blogs available right now.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
