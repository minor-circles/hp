import { PostType } from '@/types/post';
import { PostBody } from './PostBody';

type Props = {
  post: PostType;
};

export const TopPost: React.VFC<Props> = ({ post }) => {
  const { title, coverImage, date, tags, content } = post;

  return (
    <div className="p-8 bg-primary-1 mb-8" key={title}>
      <h1 className="text-4xl font-bold">{title}</h1>
      <PostBody content={content} />
    </div>
  );
};
