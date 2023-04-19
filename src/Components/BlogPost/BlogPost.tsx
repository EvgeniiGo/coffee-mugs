import "./BlogPost.css";
import { useParams } from "react-router-dom";
import { Post } from "../../data/Posts";
import { Person } from "../../data/People";

type PropsType = {
  posts: Post[];
  people: Person[];
};

const BlogPost = ({ posts, people }: PropsType) => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === id) as Post;
  const person = people.find((person) => person.name === post.author) as Person;

  const postImg: string = new URL(
    `../../images/posts/${post.id}.jpg`,
    import.meta.url
  ).href;
  const personImg: string = new URL(
    `../../images/people/${person.id}.jpg`,
    import.meta.url
  ).href;

  const dateString: string =
    post.date.month + " " + post.date.day + ", " + post.date.year;

  return (
    <div className="blog-post">
      <div className="headline">
        <h1 className="headline__title">{post.title}</h1>
        <p className="headline__subtitle">{post.subtitle}</p>
      </div>
      <div className="blog-post__image-container">
        <img src={postImg} alt={post.title} className="blog-post__image" />
      </div>
      <div className="blog-post__content">
        <div className="blog-post__text-container">
          <div className="blog-post__date-container">
            <p className="blog-post__date">{dateString}</p>
            <div className="blog-post__date-line" />
          </div>
          {post.body.map((el) => {
            const key: string = Object.keys(el)[0];
            switch (key) {
              case "h2":
                return <h2 className="blog-post__h2">{el[key]}</h2>;
              case "h3":
                return <h3 className="blog-post__h3">{el[key]}</h3>;
              case "p":
                return <p className="blog-post__p">{el[key]}</p>;
              case "quote":
                return (
                  <blockquote className="blog-post__quote">
                    {el[key]}
                  </blockquote>
                );
              case "img":
                return (
                  <img
                    src={
                      new URL(
                        `../../images/posts/${el[key]}.jpg`,
                        import.meta.url
                      ).href
                    }
                    alt="some coffee image"
                    className="blog-post__img"
                  />
                );
              case "label":
                return <p className="blog-post__label">{el[key]}</p>;
              default:
                return <></>;
            }
          })}
        </div>
        <div className="blog-post__author">
          <div className="blog-post__author-content">
            <p className="blog-post__author-label">Written by</p>
            <img
              src={personImg}
              alt="author image"
              className="blog-post__author-img"
            />
            <h4 className="blog-post__author-name">{post.author}</h4>
            <p className="blog-post__author-description">
              Tempora vel voluptate. Aut dolorum officia qui officia nostrum
              porro. Voluptas ut id quo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
