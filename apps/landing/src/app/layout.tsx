import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://suldak.me'),
  title: '술닥술닥',
  description:
    '당신의 취향에 맞는 술과 모임을 한번에! 다채로운 큐레이션과 컨텐츠를 제공하는 새로운 주류 커뮤니티 플랫폼',
  keywords: [
    '편의점 맛있는 술 추천',
    '도수 높고 맛있는 술',
    '맛있는 술',
    '술 모임',
    '술자리 모임',
    '가성비 술 추천',
    '맛있는 술 추천',
    '칵테일 추천',
    '하이볼',
    '맥주 추천',
    '술 추천 앱',
    '술 페어링',
    '주류 커뮤니티',
  ],
  authors: [
    {
      name: '술닥술닥',
      url: 'https://suldak.me',
    },
  ],
  creator: '술닥술닥',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://suldak.me',
    title: '술닥술닥',
    description:
      '당신의 취향에 맞는 술과 모임을 한번에! 다채로운 큐레이션과 컨텐츠를 제공하는 새로운 주류 커뮤니티 플랫폼',
    siteName: '술닥술닥',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: '술닥술닥',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '술닥술닥',
    description:
      '당신의 취향에 맞는 술과 모임을 한번에! 다채로운 큐레이션과 컨텐츠를 제공하는 새로운 주류 커뮤니티 플랫폼',
    images: ['/twitter-image.png'],
    creator: '@suldak',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-pretendard" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
