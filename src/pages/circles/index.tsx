import { List } from '@/components/pages/list';
import { getAllPosts } from '@/lib/api';

type Props = React.ComponentPropsWithoutRef<typeof List>;

const View: React.VFC<Props> = (props: Props) => <List {...props} category='circles' />;

export default View;

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'iconImage',
    'excerpt',
    'tags',
    'content',
  ], 'circles').slice(0, 4);

  return {
    props: { posts },
  };
};
