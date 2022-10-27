import { PageFormInputProps } from "../models/models";

const PageForm = ({ submitEvent, closeEvent }: PageFormInputProps) => {
  return (
    <form onSubmit={submitEvent}>
      <h3>Add New Page</h3>
      <input type="text" placeholder="Title..." />
      <input type="text" placeholder="Content..." />
      <button type="submit">Confirm</button>
      <button type="reset">Clear</button>
      <button onClick={closeEvent}>Cancel</button>
    </form>
  );
};

export default PageForm;