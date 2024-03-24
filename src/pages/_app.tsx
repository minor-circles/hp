import { AppProps } from 'next/app';
import '@/styles/index.css';
import { Footer } from '@/components/features/app/Footer';
import { Header } from '@/components/features/app/Header';
import { ContentLayout } from '@/components/features/app/Layout';
import { Seo } from '@/components/features/app/Seo';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <div
        style={{ gridTemplateRows: 'auto 1fr auto' }}
        className="grid gap-10 min-h-screen bg-global"
      >

        <Header />

        <ContentLayout className="px-0 py-6 sm:p-6 z-0">
          {/* <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            {new Array(10).fill(0).map((_, i) =>
              <div key={i} style={{
                position: 'absolute',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                backgroundColor: 'red',
                height: 'calc(60px / 2 * tan(60deg))',
                width: '60px',
                clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
              }}></div>
            )
            }
          </div> */}
          <Component {...pageProps} />
        </ContentLayout >
        <div className='z-10'>
          <Footer />
        </div>
      </div >
    </>
  );
}
