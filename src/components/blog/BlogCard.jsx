const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-green-700 mb-2">
        {blog.Title}
      </h2>

      <p className="text-gray-700 mb-3">
        {blog.Description}
      </p>

      {blog.Date && (
        <p className="text-sm text-gray-500">
          📅 {blog.Date}
        </p>
      )}
    </div>
  );
};

export default BlogCard;
