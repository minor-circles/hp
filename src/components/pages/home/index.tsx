import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';
import { PostType } from '@/types/post';
import { TopPost } from '@/components/features/post/TopPost';

type Props = {
  posts: PostType[];
};

export const Home: React.VFC<Props> = ({ posts }) => {
  return (
    <MainLayout
      main={
        <div>
          {posts.map((post) => <TopPost post={post}/>)}
          
          <div className="vstack gap-12 p-8 bg-primary-1">
            <h1 className="hstack gap-2 text-primary-1 text-3xl font-bold tracking-tighter leading-tight">マイナーサークルって何</h1>
            <p className="text-sm text-primary-2">ここに説明</p>
            <a className='button' href='/circles/page/1/'>マイナーサークル一覧を見る</a>
          </div>
        </div>

      }
      // aside={<Profile />}
    />
  );
};
