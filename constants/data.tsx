import { NavigationItem } from '@/types/element-types/types';
import ExampleTour from '@/assets/images/exampletour.jpeg';

export const NAVIGATION: NavigationItem[] = [
  { name: 'About us', href: '/about', current: false },
  { name: 'Tours', href: '/our-tours', current: false },
  { name: 'Blogs', href: '/blogs', current: false },
];

export const mockTours = [
  {
    id: 11,
    title: 'Sevan Lake & Sevanavank',
    description:
      'Scenic lake surrounded by mountains and the historic Sevanavank Monastery on a peninsula.',
    imageUrl: ExampleTour,
    time: 'full Day',
    price: '$80',
  },
  {
    id: 21,
    title: 'Garni Temple & Geghard Monastery',
    description:
      'Visit the only pagan temple in the region and a unique rock-carved monastery complex.',
    imageUrl: ExampleTour,
    time: 'half Day',
    price: '$70',
  },
  {
    id: 31,
    title: 'Tatev Monastery & Ropeway',
    description:
      'Ride the world’s longest reversible cable car to explore the majestic Tatev Monastery.',
    imageUrl: ExampleTour,
    time: 'Full Day',
    price: '$110',
  },
  {
    id: 41,
    title: 'Dilijan & Parz Lake',
    description:
      'Lush forests, crystal-clear lakes, and cozy cafés in Armenia’s “Little Switzerland.”',
    imageUrl: ExampleTour,
    time: 'full Day',
    price: '$95',
  },
  {
    id: 51,
    title: 'Areni Wine & Noravank',
    description:
      'Taste Armenia’s finest wines in Areni and visit the jaw-dropping red rock Noravank Monastery.',
    imageUrl: ExampleTour,
    time: 'full Day',
    price: '$85',
  },
  {
    id: 61,
    title: 'Khor Virap & Mount Ararat View',
    description:
      'Explore the sacred monastery with iconic views of Mount Ararat near the Turkish border.',
    imageUrl: ExampleTour,
    time: 'half Day',
    price: '$65',
  },
  {
    id: 71,
    title: 'Gyumri Cultural Tour',
    description:
      'Dive into Armenia’s artistic and architectural second city with rich culture and history.',
    imageUrl: ExampleTour,
    time: 'full Day',
    price: '$90',
  },
  {
    id: 81,
    title: 'Amberd Fortress & Aragats',
    description:
      'Medieval fortress ruins set against the stunning backdrop of Mount Aragats.',
    imageUrl: ExampleTour,
    time: 'full Day',
    price: '$100',
  },
  {
    id: 91,
    title: 'Yerevan City Tour',
    description:
      'Discover Republic Square, Cascade, museums, and local markets in Armenia’s capital.',
    imageUrl: ExampleTour,
    time: 'half Day',
    price: '$50',
  },
  {
    id: 101,
    title: 'Haghpat & Sanahin Monasteries',
    description:
      'UNESCO heritage twin monasteries with dramatic landscapes in northern Armenia.',
    imageUrl: ExampleTour,
    time: 'full Day',
    price: '$120',
  },
];
