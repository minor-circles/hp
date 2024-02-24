export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  iconImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  tags: string[];
};
