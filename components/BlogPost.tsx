import Link from "next/link";


const BlogPost = ({ date, title, des, slug }) => {
  var moment = require('moment');
  const publish_date = moment(date).format('YYYY년 MM월 DD일')

  return (
    <Link href={`/blog/${slug}`} passHref>
      <a className="w-full my-7 hover:-translate-x-1.5">
        <div className="font-medium text-xs text-gray-400">{publish_date}</div>
        <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
        <div className={`font-medium text-gray-600 text-xl mt-1`}>{des}</div>
      </a>
    </Link>
  );
};
export default BlogPost;