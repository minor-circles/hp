import {Link} from '@/components/common/Link';
import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';
import { TopPost } from '@/components/features/post/TopPost';
import { PostType } from '@/types/post';
type Props = {
  posts: PostType[];
};

export const Home: React.VFC<Props> = ({ posts }) => {
  return (
    <MainLayout
      main={
        <div>
          {posts.map((post) => <TopPost post={post} key={post.title}/>)}
          
          <div className="vstack gap-12 p-8 bg-primary-1">
            <h1 className="hstack gap-2 text-primary-1 text-3xl font-bold tracking-tighter leading-tight">マイナーサークルって何</h1>
            <p className="text-sm text-primary-1 ">ここに説明</p>

            <Link href='/circles/page/1/' passHref>
              <a className="button">
              マイナーサークル一覧を見る
              </a>
            </Link>
          </div>
        </div>

      }
      // aside={<Profile />}
    />
  );
};
