import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';
import { PostType } from '@/types/post';

type Props = {
  posts: PostType[];
};

export const Home: React.VFC<Props> = ({ posts }) => {
  return (
    <MainLayout
      main={
        <div>
          <div className="vstack gap-12 p-8 bg-primary-1">
            <h1 className="hstack gap-2 text-primary-1 text-3xl font-bold tracking-tighter leading-tight">マイナーサークル合同説明会</h1>
            <p className="text-sm text-primary-2">ここに説明が入る</p>
          </div>
          <br />
          <div className="vstack gap-12 p-8 bg-primary-1">
            <h1 className="hstack gap-2 text-primary-1 text-3xl font-bold tracking-tighter leading-tight">なんかの見出し</h1>
            <p className="text-sm text-primary-2">なんかの説明</p>
          </div>
        </div>

      }
      aside={<Profile />}
    />
  );
};
