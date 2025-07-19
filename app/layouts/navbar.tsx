'use client';
import { Text, TextStyle } from '../../elements/typography/text';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NAVIGATION } from '@/constants/data';
import PhoneSVG from '@/assets/icons/phone.svg';
import Link from 'next/link';
import { useState } from 'react';
import Button from '@/elements/button/button';
import LanguageSwitcher from '../components/language-switcher';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <nav className='flex items-center justify-between bg-primary-400 h-[55px] py-2 px-4 md:px-24 sticky top-0 z-50'>
        <Link href='/'>
          <div className='cursor-pointer text-white text-lg font-semibold'>
            company Logo
          </div>
        </Link>

        <div className='hidden sm:flex gap-6 items-center'>
          <LanguageSwitcher />
          <div className='flex gap-x-2 text-white'>
            <PhoneSVG />
            <p className='text-nowrap'>+374 93111112</p>
          </div>

          <ul className='flex gap-6'>
            {NAVIGATION.map((item) => (
              <li key={item.name}>
                <Link href={item.href || '/'}>
                  <Text
                    style={TextStyle.BodyBaseMedium}
                    value={t(item.name)}
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

      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black/30 z-40'
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={twMerge(
          'fixed top-0 right-0 z-50 h-[70vh] w-[60vw] bg-primary-400 rounded-xl shadow-xl p-6 pt-0 transform transition-transform duration-300',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
        )}>
        <div className='flex justify-between items-center mb-6'>
          <div className='flex items-center gap-x-2 text-white pt-14'>
            <PhoneSVG />
            <p className='text-nowrap'>+374 93111112</p>
          </div>
          <button onClick={() => setIsMenuOpen(false)}>
            <XMarkIcon className='h-6 w-6 text-white pt-0' />
          </button>
        </div>

        <ul className='flex flex-col gap-4'>
          {NAVIGATION.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href || '/'}
                onClick={() => setIsMenuOpen(false)}>
                <Text
                  style={TextStyle.BodyBaseMedium}
                  value={t(item.name)}
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
