import { Home } from '@/components/pages/home';
import { getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';

type Props = React.ComponentPropsWithoutRef<typeof Home>;

const View: React.VFC<Props> = (props: Props) => <Home {...props} />;

export default View;

export const getStaticProps = async () => {

  const topPosts = ['posts/orientation-2024']


  const posts = topPosts.map(async (slug) => {
    const post = getPostBySlug(slug, [
      'title',
      'date',
      'slug',
      'coverImage',
      'excerpt',
      'content',
      'tags',
    ]);
    const content = await markdownToHtml(post.content || '');

    return {
      ...post,
      content,
    }
  })
  return Promise.all(posts).then((posts) => {
    return {
      props: {
        posts,
      },
    };
  })
};
