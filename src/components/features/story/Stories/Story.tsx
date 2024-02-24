import { Date } from '@/components/common/Date';
import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';

type Props = {
  title: string;
  coverImage: string;
  iconImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export const Story = ({ title, coverImage,iconImage, date, excerpt, slug }: Props) => {
  return (
    <Link href={`/${slug}`} className='hover:bg-indigo-500'>
      <a className="select-none overflow-hidden w-full h-full vstack md:flex-row cursor-pointer focus:outline-2 ">
        {
          iconImage ?
          (
            <div className="center w-full md:w-1/5 h-52 md:h-full bg-neutral-50 md:bg-transparent">
              <Image
                src={iconImage}
                alt={`Cover Image for ${title}`}
                className="w-full h-full max-h-xs object-contain bg-white"
              />
            </div>
          ):
          (
            <div className="center w-full md:w-1/5 h-52 md:h-full bg-neutral-50 md:bg-transparent">
              <Image
                src={coverImage}
                alt={`Cover Image for ${title}`}
                className="w-full h-full max-w-xs object-cover"
              />
            </div>
          )
        }


        <div className="md:w-2/3 p-4 md:p-6 vstack gap-2 bg-primary-1">
          {
            !slug.includes('circles') && <Date date={date} />
          }
          <h3 className="text-primary-1 text-xl font-medium">{title}</h3>
          <p className="text-neutral-700 dark:text-neutral-300 font-normal text-md line-clamp-2 md:line-clamp-3">
            {excerpt}
          </p>
        </div>
      </a>
    </Link>
  );
};
