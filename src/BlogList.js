const BlogList = (props) => {
  const { blogs, title } = props;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Date {blog.date}</p>
            
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
