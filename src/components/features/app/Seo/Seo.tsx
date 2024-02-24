import { DefaultSeo } from 'next-seo';
import { ROOT_URL } from '@/config/app';
import { useRootPath } from '@/hooks/useRootPath';
import { joinPath } from '@/lib/joinPath';

export const Seo = () => {
  const rootPath = useRootPath();
  const imageURL = joinPath(ROOT_URL, '/assets/thumbnail.png');

  return (
    <>
      <DefaultSeo
        defaultTitle="マイサー合同"
        description="大阪大学のマイナーサークル合同会のホームページです"
        openGraph={{
          type: 'website',
          title: 'マイサー合同',
          description: '大阪大学のマイナーサークル合同会のホームページです',
          site_name: 'マイサー合同',
          url: ROOT_URL,
          images: [
            {
              url: imageURL,
              width: 512,
              height: 512,
              alt: 'Og Image Alt',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `${rootPath}/favicons/favicon-32x32.png`,
          },
        ]}
      />
    </>
  );
};
