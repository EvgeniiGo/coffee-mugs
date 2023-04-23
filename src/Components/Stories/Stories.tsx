import "./Stories.css";
import { Post } from "../../data/Posts";
import PostCart from "../PostCart/PostCard";
import SectionTitle from "../SectionTitle/SectionTitle";

type PropsType = {
  posts: Post[];
};

const Stories = ({ posts }: PropsType) => {
  return (
    <section className="stories">
      <SectionTitle text="BEHIND THE MUGS, LIFESTYLE STORIES" />
      <div className="stories__posts">
        {posts.map((post) => {
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
    </section>
  );
};

export default Stories;
