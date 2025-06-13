'use client';
import { Text, TextStyle } from '../../elements/typography/text';
import Dropdown from '../../elements/dropdown/dropdown';
//import IconDown from '@/assets/icons/chevron-down.svg';
// import Button from '../../elements/button/button';
// import Image from 'next/image';
//import CompanyLogo from '@/assets/images/logo.png';
//import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NAVIGATION } from '@/constants/data';
//import { useRouter } from 'next/navigation';

import PhoneSVG from '@/assets/icons/phone.svg';
import Link from 'next/link';

const onClick = () => {};

const Navbar = () => {
  return (
    <>
      <div className='bg-primary-400 py-2 px-24 sticky top-0 z-50'>
        {/* <div className='absolute left-0 top-0 flex w-full items-center justify-between px-4 pt-5'>
            <Image
                    src={CompanyLogo}
                    alt='Company Logo'
                    width={44}
                    height={44}
                    className='hover:cursor-pointer'
                  />
              <button
                    type='button'
                    onClick={() => setSidebarOpen(false)}
                    className='-m-2.5 p-2.5'>
                    <XMarkIcon
                      aria-hidden='true'
                      className='size-6 text-black'
                    />
                  </button>
          </div> */}
        <nav className='flex flex-1 items-center gap-4 justify-between'>
          <Link href='/'>
            <div className='cursor-pointer'>company Logo</div>
          </Link>

          <div className='flex gap-6 items-center'>
            <div className='flex gap-x-2 text-white'>
              <PhoneSVG />
              <p>+374 93111112</p>
            </div>

            <ul role='list' className='flex flex-1 gap-6 justify-end'>
              {NAVIGATION.map((item) => (
                <li key={item.name} className='relative'>
                  {item.submenu ? (
                    <Dropdown
                      poper={
                        <div className='flex cursor-pointer items-center gap-1 p-2 text-sm/6 font-normal text-gray-900'>
                          <Text
                            style={TextStyle.BodySmNormal}
                            className='text-nowrap'
                            value={item.name}
                          />
                          {/* <IconDown /> */}
                        </div>
                      }
                      position='bottom'
                      items={item.submenu.map((sub) => ({
                        title: sub.name,
                      }))}
                      onClick={onClick}
                    />
                  ) : (
                    <Link href={item.href || '/'}>
                      <Text
                        style={TextStyle.BodyBaseSemibold}
                        value={item.name}
                        className='group flex gap-x-3 rounded-md p-2 text-sm/6 text-white text-nowrap'
                      />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
