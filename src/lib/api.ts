import fs from 'fs';
import { resolve } from 'path';
import matter from 'gray-matter';
import { paginationOffset } from '@/config/pagination';
import { PostType } from '@/types/post';
const postsDirectory = resolve(process.cwd(), '_posts');

//fs.readdirSync(postsDirectory,recursive =true)をやりたかった
//export const getPostSlugs = () => ['circles','posts'].reduce((acc,dir)=>acc.concat(fs.readdirSync(resolve(postsDirectory,dir)).map(x=>dir+'/'+x)),new Array<string>())

const category_list = ['circles','posts']
export const getPostSlugs = (category:string) => category=='ALL'?
  category_list.reduce((acc,dir)=>acc.concat(fs.readdirSync(resolve(postsDirectory,dir)).map(x=>dir+'/'+x)),new Array<string>())
  :fs.readdirSync(postsDirectory+'/'+category).map(x=>category+'/'+x)

export const getMaxPage = (category:string) => {
  const postNum = getPostSlugs(category).length;
  return Math.ceil(postNum / paginationOffset);
};

export const getPostBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = resolve(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items as Partial<PostType>;
};

type Field = keyof PostType;

export const getAllPosts = (fields: Field[] = [],category:string) => {
  const slugs = getPostSlugs(category);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => {
      if(post1.tags?.includes('活動中') && !post2.tags?.includes('活動中')) return -1;
      if(!post1.tags?.includes('活動中') && post2.tags?.includes('活動中')) return 1;
      return Math.random()<0.5 ? -1 : 1});
      
    // .sort((post1, post2) => (post1.date! > post2.date! ? -1 : 1));
  return posts;
};
