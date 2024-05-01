const BlogsForm = ({
  title,
  setTitle,
  snippet,
  setSnippet,
  body,
  setBody,
  error,
  handleSubmit,
}) => {
  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3 className="create-heading">Add a New Blog</h3>

      <label>Blog Title:</label>

      <textarea
        className="title-textarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        // className={emptyFields.includes("title") ? "error" : ""}
      />
      <br />

      <label>Blog Snippet:</label>

      <textarea
        className="snippet-textarea"
        type="text"
        onChange={(e) => setSnippet(e.target.value)}
        value={snippet}
        // className={emptyFields.includes("snippet") ? "error" : ""}
      />
      <br />

      <label>Blog body:</label>

      <textarea
        className="body-textarea"
        onChange={(e) => setBody(e.target.value)}
        value={body}
        // className={emptyFields.includes("body") ? "error" : ""}
      />
      <br />

      <button className="add-blog-btn">Add Blog</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default BlogsForm;

{
  /* <div class="create-blog content">
      <form action="/blogs" method="post">
        <label for="title">Blog Title</label><br />
        <input type="text" id="title" required name="title" /><br />
        <label for="snippet">Blog Snippet</label><br />
        <input type="text" id="snippet" required name="snippet" /><br />
        <label for="body">Blog body</label><br />
        <textarea id="body" required name="body"></textarea><br />
        <button>Submit</button>
      </form>
    </div> */
}
