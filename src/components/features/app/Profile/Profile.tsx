import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';
import { sns } from '@/config/sns';

type Props = {
  isSide: boolean;
};
export const Profile: React.VFC<Props> = ({ isSide }) => (
  <div className="select-none vstack items-center gap-5 p-6 bg-primary-1">
    <div className="vstack items-center gap-2">
      <Image
        className="object-cover w-28 h-28 rounded-full"
        alt="avatar"
        src="/assets/author.jpg"
      />
      <h1 className="text-2xl font-semibold text-primary-1">マイナーサークルとは</h1>
    </div>

    <p className="text-primary-1">
      {
        isSide
          ? '小規模で個性豊かなサークルの集まり。全国的にも珍しい活動を行っていたり、それゆえ存続の危機だったりする。Twitter上でのみ活動するサークルも多数。'
          : '一般に、全国的に珍しい活動を行っていたり慢性的に部員の少なかったりするサークルのことを指します。一風変わった個性豊かなサークルが集まっていることが特徴です。また、Twitter上でのみ活動するサークルも多く、Twitterサークルと呼ばれる場合もあります。最も、マイナーサークルの明確な定義はなく、日々意味合いは変化し続けています。'
      }
    </p>

    <div className="flex gap-4">
      {sns.map(({ href, icon, label }) => (
        <Link key={href} href={href} passHref>
          <a className="text-primary-1" aria-label={label}>
            {icon}
          </a>
        </Link>
      ))}
    </div>
  </div>
);
