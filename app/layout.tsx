import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/globals.css';
import { twMerge } from 'tailwind-merge';
import MainLayout from '@/app/layouts/main-layout';
import QueryProvider from '@/providers/query-provider';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
});
export const metadata: Metadata = {
  title: 'ArmArtTours',
  description: 'ArmArtTours',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body className={twMerge('grid', poppins.className, poppins.variable)}>
        <QueryProvider>
          <MainLayout>{children}</MainLayout>
        </QueryProvider>
      </body>
    </html>
  );
};
export default RootLayout;
