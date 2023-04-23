import "./PostCard.css";
import { Post } from "../../data/Posts";
import { useNavigate } from "react-router-dom";

type PropsType = Omit<Post, "categories" | "author" | "body">;

const PostCart = ({ id, title, subtitle, date }: PropsType) => {
  const dateString: string = date.month + " " + date.day + ", " + date.year;

  const img: string = new URL(`../../images/posts/${id}.jpg`, import.meta.url)
    .href;

  const navigate = useNavigate();
  const handleNavigation = (): void => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="post-card">
      <div className="post-card__image-container">
        <img
          src={img}
          alt={title}
          className="post-card__image"
          onClick={handleNavigation}
        />
        <a href={`posts/${id}`} className="post-card__link">
          Read the full story
        </a>
      </div>
      <div className="post-card__text">
        <h4 className="post-card__title" onClick={handleNavigation}>
          {title}
        </h4>
        <p className="post-card__subtitle">{subtitle}</p>
        <p className="post-card__date">{dateString}</p>
      </div>
    </div>
  );
};

export default PostCart;
