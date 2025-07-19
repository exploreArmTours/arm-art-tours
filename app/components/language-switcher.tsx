'use client';
import { useTranslation } from 'react-i18next';
import GBFlagIcon from '@/assets/icons/gb-flag.svg';
import AMFlagIcon from '@/assets/icons/am-flag.svg';
import RUFlagIcon from '@/assets/icons/ru-flag.svg';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Button from '@/elements/button/button';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: <GBFlagIcon /> },
  { code: 'hy', label: 'Հայերեն', flag: <AMFlagIcon /> },
  { code: 'ru', label: 'Русский', flag: <RUFlagIcon /> },
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const currentLang =
    LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <MenuButton className='inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm text-white hover:bg-primary-300 transition'>
        {currentLang.flag}
        {currentLang.label}
        <ChevronDownIcon className='w-4 h-4 text-white' />
      </MenuButton>

      <MenuItems className='absolute right-0 z-10 mt-1 w-40 origin-top-right rounded-md bg-white shadow-lg focus:outline-none'>
        <div className='py-1 bg-primary-300 rounded-md'>
          {LANGUAGES.map((lang) => (
            <MenuItem key={lang.code}>
              {({ active }) => (
                <Button
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={`${
                    active ? 'bg-primary-100' : 'bg-primary-300'
                  } flex w-full items-center rounded-none gap-2 px-4 text-sm text-gray-800`}>
                  {lang.flag}
                  {lang.label}
                </Button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default LanguageDropdown;
