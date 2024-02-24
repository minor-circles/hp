import { useRouter } from 'next/router';
import { RiChatNewLine,RiArchiveDrawerFill  } from 'react-icons/ri';
import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';
import { Pagination } from '@/components/features/story/Pagination';
import { Stories } from '@/components/features/story/Stories';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
  maxPage: number;
  category: string;
};

const catToTitle: {[key: string]: string} = {
  'posts':'投稿一覧',
  'circles':'サークル一覧',
}
const catToIcon: {[key: string]: React.ReactElement} = {
  'posts':<RiChatNewLine />,
  'circles':<RiArchiveDrawerFill />,
}

export const Page: React.VFC<Props> = ({ posts, maxPage,category }) => {
  const page = Number(useRouter().query.page);

  return (
    <MainLayout
      main={
        <div className="vstack gap-10 p-8 bg-primary-1">
          <Stories posts={posts} title={catToTitle[category]} icon={catToIcon[category]} />
          <Pagination count={maxPage} page={page} />
        </div>
      }
      aside={<Profile />}
    />
  );
};
