import Intro from "../Intro/Intro";
import { Post } from "../../data/Posts";
import PostCart from "../PostCart/PostCart";
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
      </div>
    </>
  );
};

export default Blog;
