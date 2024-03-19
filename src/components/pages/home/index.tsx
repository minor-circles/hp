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
            <p className="text-sm text-primary-1 ">
              一般に、全国的に珍しい活動を行っていたり慢性的に部員の少なかったりするサークルのことを指します。一風変わった個性豊かなサークルが集まっていることが特徴です。
              <br />
              また、Twitter上でのみ活動するサークルも多く、Twitterサークルと呼ばれる場合もあります。
              <br />
              最も、マイナーサークルの明確な定義はなく、日々意味合いは変化し続けています。
              <br />
              さあ、あなたもマイナーサークルの世界を覗いてみませんか？
            </p>


            <Link href='/circles/page/1/' passHref>
              <a className="button">
              マイナーサークル一覧を見る
              </a>
            </Link>
            <p>※過去の大阪大学マイナーサークル合同説明会に参加したマイナーサークルも掲載しています。最新の情報ではないものもありますので、各ページの更新日時をご確認ください。</p>
          </div>
        </div>

      }
      // aside={<Profile />}
    />
  );
};
