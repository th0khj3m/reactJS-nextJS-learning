function NewPost(props: {
  onBodyChange: React.ChangeEventHandler<HTMLTextAreaElement>,
  onAuthorChange: React.ChangeEventHandler<HTMLInputElement>
}) {
  return (
    <form className="bg-purple-700 p-4 w-80 mx-auto my-8 rounded-lg shadow-lg space-y-4">
      <p>
        <label htmlFor="body" className="block mb-1 text-purple-100 font-bold">
          Text
        </label>
        <textarea
          id="body"
          required
          rows={3}
          className="block w-full p-2.5 rounded-md border-none bg-purple-300 text-gray-900"
          onChange={props.onBodyChange}
        />
      </p>
      <p>
        <label htmlFor="name" className="block mb-1 text-purple-100 font-bold">
          Your name
        </label>
        <input
          type="text"
          id="name"
          required
          className="block w-full p-2.5 rounded-md border-none bg-purple-300 text-gray-900"
          onChange={props.onAuthorChange}
        />
      </p>
    </form>
  );
}

export default NewPost;
