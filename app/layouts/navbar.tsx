'use client';
import { Text, TextStyle } from '../../elements/typography/text';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NAVIGATION } from '@/constants/data';
import PhoneSVG from '@/assets/icons/phone.svg';
import Link from 'next/link';
import { useState } from 'react';
import Button from '@/elements/button/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='bg-primary-400 py-2 px-4 md:px-24 sticky top-0 z-50'>
        <nav className='flex items-center justify-between'>
          <Link href='/'>
            <div className='cursor-pointer text-white text-lg font-semibold'>
              company Logo
            </div>
          </Link>

          <div className='hidden sm:flex gap-6 items-center'>
            <div className='flex gap-x-2 text-white'>
              <PhoneSVG />
              <p className='text-nowrap'>+374 93111112</p>
            </div>

            <ul className='flex gap-6'>
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link href={item.href || '/'}>
                    <Text
                      style={TextStyle.BodyBaseSemibold}
                      value={item.name}
                      className='text-white hover:underline'
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {!isMenuOpen && (
            <div className='sm:hidden'>
              <Button onClick={() => setIsMenuOpen(true)}>
                <Bars3Icon className='h-6 w-6 text-white' />
              </Button>
            </div>
          )}
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black/30 z-40'
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-[80vh] w-[75vw] bg-primary-400 rounded-xl shadow-xl p-6 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className='flex justify-between items-center mb-6'>
          <div className='flex items-center gap-x-2 text-white'>
            <PhoneSVG />
            <p className='text-nowrap'>+374 93111112</p>
          </div>
          <button onClick={() => setIsMenuOpen(false)}>
            <XMarkIcon className='h-6 w-6 text-white' />
          </button>
        </div>

        <ul className='flex flex-col gap-4'>
          {NAVIGATION.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href || '/'}
                onClick={() => setIsMenuOpen(false)}>
                <Text
                  style={TextStyle.BodyBaseSemibold}
                  value={item.name}
                  className='text-white text-lg'
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

// 'use client';
// import { Text, TextStyle } from '../../elements/typography/text';
// // import Image from 'next/image';
// //import CompanyLogo from '@/assets/images/logo.png';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import { NAVIGATION } from '@/constants/data';
// //import { useRouter } from 'next/navigation';
// import PhoneSVG from '@/assets/icons/phone.svg';
// import Link from 'next/link';
// import { useState } from 'react';
// import Button from '@/elements/button/button';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <>
//       <div className='bg-primary-400 py-2 px-24 sticky top-0 z-50'>
//         {/* <div className='absolute left-0 top-0 flex w-full items-center justify-between px-4 pt-5'>
//             <Image
//                     src={CompanyLogo}
//                     alt='Company Logo'
//                     width={44}
//                     height={44}
//                     className='hover:cursor-pointer'
//                   />
//           </div> */}
//         <nav className='flex flex-1 items-center gap-4 justify-between'>
//           <Link href='/'>
//             <div className='cursor-pointer'>company Logo</div>
//           </Link>

//           <div className='hidden sm:flex gap-6 items-center'>
//             <div className='flex gap-x-2 text-white'>
//               <PhoneSVG />
//               <p className='text-nowrap'>+374 93111112</p>
//             </div>

//             <ul role='list' className='flex flex-1 gap-6 justify-end'>
//               {NAVIGATION.map((item) => (
//                 <li key={item.name} className='relative'>
//                   <Link href={item.href || '/'}>
//                     <Text
//                       style={TextStyle.BodyBaseSemibold}
//                       value={item.name}
//                       className='group flex gap-x-3 rounded-md p-2 text-sm/6 text-white text-nowrap'
//                     />
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className='sm:hidden'>
//             {isMenuOpen && (
//               <div
//                 className='fixed inset-0 bg-black/30 z-40 backdrop-blur-sm'
//                 onClick={() => setIsMenuOpen(false)}
//               />
//             )}
//             <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? (
//                 <XMarkIcon className='h-6 w-6' />
//               ) : (
//                 <Bars3Icon className='h-6 w-6' />
//               )}
//             </Button>
//             {isMenuOpen && (
//               <div>
//                 <div className='flex gap-x-2 text-white'>
//                   <PhoneSVG />
//                   <p className='text-nowrap'>+374 93111112</p>
//                 </div>

//                 <ul
//                   role='list'
//                   className='flex flex-col flex-1 gap-1 justify-end'>
//                   {NAVIGATION.map((item) => (
//                     <li key={item.name} className='relative'>
//                       <Link href={item.href || '/'}>
//                         <Text
//                           style={TextStyle.BodyBaseSemibold}
//                           value={item.name}
//                           className='group flex gap-x-3 rounded-md p-1 text-sm/6 text-white text-nowrap'
//                         />
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;
