import "./PostCart.css";
import { Post } from "../../data/Posts";

type PropsType = Omit<Post, "categories" | "author">;

const PostCart = ({ id, title, subtitle, date }: PropsType) => {
  const dateString: string = date.month + " " + date.day + ", " + date.year;

  const img: string = new URL(`../../images/posts/${id}.jpg`, import.meta.url)
    .href;

  return (
    <div className="post-card">
      <div className="post-card__image-container">
        <img src={img} alt={title} className="post-card__image" />
        <button className="post-card__button" type="button">
          Read the full story
        </button>
      </div>
      <div className="post-card__text">
        <h4 className="post-card__title">{title}</h4>
        <p className="post-card__subtitle">{subtitle}</p>
        <p className="post-card__date">{dateString}</p>
      </div>
    </div>
  );
};

export default PostCart;
