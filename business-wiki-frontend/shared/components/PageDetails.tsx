import moduleStyles from "../styles/Detailsboard.module.scss";

import { PageInterface } from "../models/models";

const { board, board__title, board__content, board__createdby } = moduleStyles;

const PageDetails = ({ title, content, createdBy }: PageInterface) => {
  return (
    <section className={board}>
        <div className={board__title}>
          <h4>{title}</h4>
        </div>
        <div className={board__content}>
          {content}
        </div>
        <div className={board__createdby}>
          <p>Created by: {createdBy.username}</p>
        </div>
    </section>
  );
};

export default PageDetails;