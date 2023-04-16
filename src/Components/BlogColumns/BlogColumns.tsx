import "./BlogColumns.css";
import { Post } from "../../data/Posts";
import PostCart from "../PostCart/PostCart";
import { people } from "../../data/People";

type PropsType = {
  posts: Post[];
};

const BlogColumns = ({ posts }: PropsType) => {
  const img: string = new URL(`../../images/logo.png`, import.meta.url).href;

  return (
    <section className="blog__columns-container">
      <div className="blog__left-column">
        <h3 className="blog__column-title">Latest Posts</h3>
        <div className="blog__posts">
          {posts.map((post) => {
            return (
              <PostCart
                id={post.id}
                title={post.title}
                subtitle={post.subtitle}
                date={post.date}
              />
            );
          })}
        </div>
      </div>
      <div className="blog__right-column">
        <h3 className="blog__title">About Us</h3>
        <div className="blog__content">
          <img src={img} alt="CoffeeStyle." className="blog__logo" />
          <p className="blog__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <a href="" className="blog__story-link">
            Read the full Story
          </a>
        </div>
        <h3 className="blog__title">Categories</h3>
        <div className="blog__content">
          <div className="blog__links">
            <a href="" className="blog__link">
              Barista
            </a>
            <a href="" className="blog__link">
              Coffee
            </a>
            <a href="" className="blog__link">
              Lifestyle
            </a>
            <a href="" className="blog__link">
              Mugs
            </a>
          </div>
        </div>
        <h3 className="blog__title">Authors</h3>
        <div className="blog__content">
          <div className="blog__links">
            {people.map((author) => {
              const img: string = new URL(
                `../../images/people/${author.id}.jpg`,
                import.meta.url
              ).href;

              return (
                <a href="" className="blog__link">
                  <img
                    src={img}
                    alt={author.name}
                    className="blog__author-image"
                  />
                  {author.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogColumns;
