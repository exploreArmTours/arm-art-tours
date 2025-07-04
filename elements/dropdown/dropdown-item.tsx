'use client';
import { DropdownItemType } from '@/types/element-types/types';
import { Text, TextStyle } from '../typography/text';
import { useSearchParams } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

interface IDropdownItem extends DropdownItemType {
  onClick: (title: string) => void;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const DropdownItem = ({ title, onClick, Icon }: IDropdownItem) => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') || '';
  return (
    <div
      onClick={() => onClick(title)}
      className={twMerge(
        'hover:bg-primary-50 flex cursor-pointer items-center gap-3 px-6 py-3 transition',
        tab === title ? 'bg-primary-50' : '',
      )}>
      {Icon ? <Icon /> : null}
      <Text
        style={TextStyle.BodySmNormal}
        value={title}
        className='text-gray-900'
      />
    </div>
  );
};

export default DropdownItem;
