import { PageInterface } from "../models/PageInterface";

const PageDetails = ({ title, content, createdBy }: PageInterface) => {
  return (
    <div>
        <h4>{title}</h4>
        <p>{content}</p>
        <p>Created by: {createdBy.username}</p>
    </div>
  );
};

export default PageDetails;