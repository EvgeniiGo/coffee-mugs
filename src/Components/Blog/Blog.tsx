import Intro from "../Intro/Intro";
import { Post } from "../../data/Posts";
import PostCart from "../PostCart/PostCard";
import "./Blog.css";
import BlogColumns from "../BlogColumns/BlogColumns";

type PropsType = {
  posts: Post[];
};

const Blog = ({ posts }: PropsType) => {
  return (
    <>
      <Intro
        title="Read coffee stories on our Blog"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
        label="
Featured posts"
      />
      <div className="blog__container">
        <section className="featured-posts">
          {posts
            .filter((post) => post.categories.includes("featured"))
            .map((post) => {
              return (
                <PostCart
                  id={post.id}
                  title={post.title}
                  subtitle={post.subtitle}
                  date={post.date}
                />
              );
            })}
        </section>
        <BlogColumns posts={posts} />
        <section className="quote">
          <p className="quote__text">
            "I wake up some mornings and sit and have my coffee and look out at
            my beautiful garden, and I go, ’Remember how good this is. Because
            you can lose it."
          </p>
          <p className="quote__label">Jason Johnson - Owner of Coffeestyle</p>
        </section>
      </div>
    </>
  );
};

export default Blog;
