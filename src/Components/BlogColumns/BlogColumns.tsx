import "./BlogColumns.css";
import { Post } from "../../data/Posts";
import PostCart from "../PostCart/PostCard";
import { people } from "../../data/People";
import { SyntheticEvent, useEffect, useState } from "react";

type PropsType = {
  posts: Post[];
};

const BlogColumns = ({ posts }: PropsType) => {
  const [postsToShow, setPostsToShow] = useState<Post[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [authorFilter, setAuthorFilter] = useState<string>("");

  useEffect(() => {
    if (categoryFilter === "" && authorFilter === "") {
      setPostsToShow(posts);
    }

    if (categoryFilter !== "") {
      setPostsToShow(
        posts.filter((post) => post.categories.includes(categoryFilter))
      );
    }

    if (authorFilter !== "") {
      setPostsToShow(posts.filter((post) => post.author === authorFilter));
    }
  }, [categoryFilter, authorFilter]);

  const img: string = new URL(`../../images/logo.png`, import.meta.url).href;

  const updateActiveFilter = (el: HTMLButtonElement): void => {
    document
      .querySelector(".blog__filter_active")
      ?.classList.remove("blog__filter_active");
    el.classList.add("blog__filter_active");
  };

  const filterByCategory = (category: string): void => {
    setCategoryFilter(category);
    setAuthorFilter("");
  };

  const handleCategoryClick = (e: SyntheticEvent<HTMLButtonElement>): void => {
    const target = e.target as HTMLButtonElement;
    updateActiveFilter(target);
    const filter = target.textContent as string;
    filterByCategory(filter.toLowerCase());
  };

  const filterByAuthor = (author: string): void => {
    setCategoryFilter("");
    setAuthorFilter(author);
  };

  const handleAuthorClick = (e: SyntheticEvent<HTMLButtonElement>): void => {
    const target = e.target as HTMLButtonElement;
    updateActiveFilter(target);
    const filter = target.textContent as string;
    filterByAuthor(filter);
  };

  return (
    <section className="blog__columns-container">
      <div className="blog__left-column">
        <h3 className="blog__column-title">Latest Posts</h3>
        <div className="blog__posts">
          {postsToShow.map((post) => {
            return (
              <PostCart
                key={post.id}
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
          <a href="/about" className="blog__story-link">
            Read the full Story
          </a>
        </div>
        <h3 className="blog__title">Categories</h3>
        <div className="blog__content">
          <div className="blog__links">
            <button
              className="blog__filter"
              onClick={handleCategoryClick}
              type="button"
            >
              Barista
            </button>
            <button
              className="blog__filter"
              onClick={handleCategoryClick}
              type="button"
            >
              Coffee
            </button>
            <button
              className="blog__filter"
              onClick={handleCategoryClick}
              type="button"
            >
              Lifestyle
            </button>
            <button
              className="blog__filter"
              onClick={handleCategoryClick}
              type="button"
            >
              Mugs
            </button>
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
                <button
                  className="blog__filter"
                  onClick={handleAuthorClick}
                  type="button"
                >
                  <img
                    src={img}
                    alt={author.name}
                    className="blog__author-image"
                  />
                  {author.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogColumns;
