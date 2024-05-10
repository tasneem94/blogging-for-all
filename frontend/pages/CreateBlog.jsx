import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogsForm from "../components/BlogsForm";
import { useBlogsContext } from "../hooks/useBlogsContext";
import { useAuthContext } from "../hooks/useAuthContext";
const CreateBlog = () => {
  const { dispatch } = useBlogsContext();
  const { user } = useAuthContext();
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }
    const bodyParagraphs = body
      .split("\n")
      .map((paragraph) => paragraph.trim())
      .filter((paragraph) => paragraph !== "");
    const blog = { title, snippet, body: bodyParagraphs };

    const response = await fetch(`${import.meta.env.VITE_URL}/blogs/`, {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      setEmptyFields(data.emptyFields);
      // console.log(data);
      console.log(data.emptyFields);

      console.log(emptyFields);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setSnippet("");
      setBody("");
      setEmptyFields([]);

      navigate("/blogs");

      dispatch({ type: "CREATE_BLOG", payload: data });
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
        emptyFields={emptyFields}
      />
    </div>
  );
};

export default CreateBlog;
