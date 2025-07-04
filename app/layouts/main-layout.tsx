'use client';
import Navbar from './navbar';
import Footer from './footer';
// import Spinner from '@/app/reusable/spinner';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=' w-full '>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
