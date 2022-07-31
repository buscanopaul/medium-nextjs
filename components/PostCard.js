import Image from "next/image";
import Logo from "../static/logo.png";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const styles = {
  wrapper: `flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer`,
  authorContainer: `flex gap-[.4rem]`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w=[1.4rem]`,
  authorImage: `object-contain`,
  authorName: `font-semibold`,
  title: `font-bold text-2xl`,
  postDetails: `flex-[2.5] flex flex-col`,
  briefing: `text-[#787878]`,
  detailsContainer: `flex-col items-center justify-between text-[#787878]`,
  articleDetails: `my-2 text-[.8rem]`,
  category: `bg-[#F2F3F2] p-1 rounded-full`,
  thumbnailContainer: `flex-1`,
};

const PostCard = ({ post }) => {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const getAuthorData = async () => {
      console.log(
        (await getDoc(doc(db, "users", post.data.author))).data(),
        "test"
      );
      setAuthorData((await getDoc(doc(db, "users", post.data.author))).data());
    };

    getAuthorData();
  }, []);

  return (
    <Link href={`/post/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={post.data.bannerImage}
                className={styles.authorImage}
                width={40}
                height={40}
              />
            </div>
            <div className={styles.authorName}>{authorData?.name}</div>
          </div>
          <div className={styles.detailsContainer}>
            <h1 className={styles.title}>{post.data.title}</h1>
            <div className={styles.briefing}>{post.data.brief}</div>

            <span className={styles.articleDetails}>
              {new Date(post.data.postedOn).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
              })}
              • {post.data.postLength} min read •{" "}
              <span className={styles.category}>{post.data.category}</span>
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image height={100} width={100} src={post.data.bannerImage} />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
