import { Page } from "../models/Page";

const PageDetails = (props: { value: Page }) => {
  return (
    <div>
        <h4>{props.value.title}</h4>
        <p>{props.value.content}</p>
        <p>Created by: {props.value.createdBy.username}</p>
    </div>
  );
};

export default PageDetails;