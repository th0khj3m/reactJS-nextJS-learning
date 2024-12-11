import { useState } from "react";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>

      <ul className="list-none max-w-5xl mx-auto py-4 grid gap-4 grid-cols-3 justify-center">
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Garen" body="Tonight Gehrman joins the hunt" />
        <Post author="Erlang Shen" body="Godamnn this monkey" />
      </ul>
    </>
  );
}

export default PostsList;
