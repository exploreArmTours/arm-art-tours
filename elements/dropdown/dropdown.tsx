import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { DropdownItemType } from '@/types/element-types/types';
import DropdownItem from './dropdown-item';
import { twMerge } from 'tailwind-merge';

interface IDropdown {
  poper: ReactNode;
  items: DropdownItemType[];
  onClick: (title: string) => void;
  position?: 'top' | 'bottom';
}

const Dropdown = ({
  poper,
  items,
  onClick,
  position = 'bottom',
}: IDropdown) => {
  const isBottom = position === 'bottom';

  return (
    <Menu as='div' className='relative'>
      <MenuButton
        className={twMerge(
          'text-sm font-semibold text-black focus:outline-none',
        )}>
        {poper}
      </MenuButton>
      <Transition
        as={Fragment}
        enter='transition ease duration-300 transform'
        enterFrom={twMerge(
          'opacity-0 ',
          isBottom ? '-translate-y-5' : ' translate-y-5',
        )}
        enterTo={twMerge(
          'opacity-100 ',
          isBottom ? 'translate-y-0' : '-translate-y-0',
        )}
        leave='transition ease duration-300 transform'
        leaveFrom={twMerge(
          'opacity-100 ',
          isBottom ? 'translate-y-0' : '-translate-y-0',
        )}
        leaveTo={twMerge(
          'opacity-0 ',
          isBottom ? '-translate-y-5' : 'translate-y-50',
        )}>
        <MenuItems
          anchor={position}
          as='div'
          className={twMerge(
            'shadow-light absolute z-10 !max-h-[250px] min-w-[106px] divide-y divide-white/5 rounded-xl bg-white text-sm',
            !isBottom ? 'mb-2' : 'mt-2',
          )}>
          {items.map(({ title, Icon }, index) => (
            <MenuItem key={index} as='div'>
              {() => (
                <DropdownItem
                  onClick={() => onClick(title)}
                  title={title}
                  Icon={Icon}
                />
              )}
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
