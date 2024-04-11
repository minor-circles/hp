import { AppProps } from 'next/app';
import '@/styles/index.css';
import { Footer } from '@/components/features/app/Footer';
import { Header } from '@/components/features/app/Header';
import { ContentLayout } from '@/components/features/app/Layout';
import { Seo } from '@/components/features/app/Seo';

export default function MyApp({ Component, pageProps }: AppProps) {
  const color_lst = ['#92B3DA', '#EECEE3', '#FBF5B9']
  const randint = (max: number) => Math.floor(Math.random() * max)
  return (
    <>
      <Seo />
      <div
        style={{ gridTemplateRows: 'auto 1fr auto' }}
        className="grid gap-10 min-h-screen bg-global"
      >

        <Header />

        <ContentLayout className="px-0 py-6 sm:p-6 z-0">
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            {new Array(300).fill(0).map((_, i) =>
              <div>
                <svg width="100" height="100" style={{
                  position: 'absolute',
                  top: Math.random() * 150 - 50 + '%',
                  left: Math.random() * 110 - 10 + '%',
                  transform: `rotate(${Math.random() * 360}deg)`,
                  transitionDuration: "3s",
                }}>
                  <path d="M50 0 L0 86 L100 86 Z" style={{ fill: "rgba(0,0,0,0)", stroke: color_lst[randint(color_lst.length)], strokeWidth: "2" }}></path>
                </svg>
              </div>
            )
            }
          </div>
          <Component {...pageProps} />
        </ContentLayout >
        <div className='z-10'>
          <Footer />
        </div>
      </div >
    </>
  );
}
