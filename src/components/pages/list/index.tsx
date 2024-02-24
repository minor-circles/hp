import { RiChatNewLine } from 'react-icons/ri';
import { Link } from '@/components/common/Link';
import { MainLayout } from '@/components/features/app/Layout';
import { Stories } from '@/components/features/story/Stories';
import { PostType } from '@/types/post';
import { Profile } from '@/components/features/app/Profile';

type Props = {
  posts: PostType[];
  category: string;
};


const catToTitle: {[key: string]: string} = {
  'posts':'最近の投稿',
  'circles':'サークル',
}
export const List: React.VFC<Props> = ({ posts,category }) => {
  return (
    <MainLayout
      main={
        <div className="vstack gap-12 p-8 bg-primary-1">
          <Stories posts={posts} title={catToTitle[category]} icon={<RiChatNewLine />} />
          <Link href={`/${category}/page/1`} passHref>
            <a className="button">
              もっと見る
            </a>
          </Link>
        </div>
      }
      aside={<Profile />}
    />
  );
};
