import { useState } from "react";

import BlogsForm from "../components/BlogsForm";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!user) {
    //   setError("You must be logged in");
    //   return;
    // }
    const bodyParagraphs = body
      .split("\n")
      .map((paragraph) => paragraph.trim());
    const blog = { title, snippet, body: bodyParagraphs };

    const response = await fetch(`${import.meta.env.VITE_URL}/blogs/`, {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      setEmptyFields(data.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setSnippet("");
      setBody("");
      setEmptyFields([]);

      console.log("new blog added:", data);
    }
  };
  return (
    <div>
      <BlogsForm
        title={title}
        setTitle={setTitle}
        snippet={snippet}
        setSnippet={setSnippet}
        body={body}
        setBody={setBody}
        error={error}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateBlog;
