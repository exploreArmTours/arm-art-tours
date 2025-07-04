import { StaticImageData } from 'next/image';

export type NavigationItem = {
  name: string;
  href?: string;
  submenu?: { name: string; href?: string }[];
  current: boolean;
};

export type DropdownItemType = {
  title: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
};

export interface TourData {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  time: string;
  price: string;
}
