import { List } from '@/components/pages/list';
import { getAllPosts } from '@/lib/api';

type Props = React.ComponentPropsWithoutRef<typeof List>;

const View: React.VFC<Props> = (props: Props) => <List {...props} category='posts'/>;

export default View;

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ],'posts').slice(0, 4);

  return {
    props: { posts },
  };
};
