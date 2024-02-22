import { RiChatNewLine } from 'react-icons/ri';
import { Link } from '@/components/common/Link';
import { MainLayout } from '@/components/features/app/Layout';
import { Stories } from '@/components/features/story/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const List: React.VFC<Props> = ({ posts }) => {
  return (
    <MainLayout
      main={
        <div className="vstack gap-12 p-8 bg-primary-1">
          <Stories posts={posts} title="サークル一覧" icon={<RiChatNewLine />} />
          <Link href="/posts/page/1" passHref>
            <a className="button">
              一覧へ
            </a>
          </Link>
        </div>
      }
      // aside={<Profile />}
    />
  );
};
