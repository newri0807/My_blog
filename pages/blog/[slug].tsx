import Container from "components/Container";
import { allPosts } from "contentlayer/generated";
import { parseISO } from "date-fns/esm";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import { format } from "path/posix";

const Post = ({ post }) => {
    var moment = require('moment');
    const publish_date = moment(post.date).format('YYYY년 MM월 DD일')
   return (
    <Container >
      <div className="mt-10 prose">
        <h1 className="text-sky-700">{post.title}</h1>
          <span>{publish_date}</span>
          <div className="cl-post-body" dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </div>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;