import { RiChatNewLine,RiArchiveDrawerFill  } from 'react-icons/ri';
import { Link } from '@/components/common/Link';
import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';
import { Stories } from '@/components/features/story/Stories';
import { PostType } from '@/types/post';
import { NextSeo } from 'next-seo';
import { ROOT_URL } from '@/config/app';

type Props = {
  posts: PostType[];
  category: string;
};


const catToTitle: {[key: string]: string} = {
  'posts':'最近の投稿',
  'circles':'サークル',
}
const catToIcon: {[key: string]: React.ReactElement} = {
  'posts':<RiChatNewLine />,
  'circles':<RiArchiveDrawerFill />,
}

export const List: React.VFC<Props> = ({ posts,category }) => {
  return (
    <>      
      <NextSeo
          title={catToTitle[category] + ' | マイナーサークル'}
          description={''}
          openGraph={{
            url: ROOT_URL,
            title: catToTitle[category],
            description: '',
          }}
        />
      <MainLayout
        main={
          <div className="vstack gap-12 p-8 bg-primary-1">
            <Stories posts={posts} title={catToTitle[category]} icon={catToIcon[category]} />
            <Link href={`/${category}/page/1`} passHref>
              <a className="button">
                もっと見る
              </a>
            </Link>
          </div>
        }
        aside={<Profile />}
      />
    </>
  );
};
