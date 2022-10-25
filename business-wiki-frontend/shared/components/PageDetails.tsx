import { PageInterface } from "../models/models";

const PageDetails = ({ title, content, createdBy }: PageInterface) => {
  return (
    <section>
        <h4>{title}</h4>
        <p>{content}</p>
        <p>Created by: {createdBy.username}</p>
    </section>
  );
};

export default PageDetails;