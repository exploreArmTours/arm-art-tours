import { NavigationItem } from '@/types/element-types/types';
import ExampleTour from '@/assets/images/exampletour.jpeg';

export const NAVIGATION: NavigationItem[] = [
  { name: 'About us', href: '/about', current: false },
  { name: 'Tours', href: '/our-tours', current: false },
  { name: 'Blogs', href: '/our-blogs', current: false },
];

export const mockTours = [
  {
    id: 11,
    slug: 'sevan-lake-sevanavank',
    title: 'Sevan Lake & Sevanavank',
    description:
      'Scenic lake surrounded by mountains and the historic Sevanavank Monastery on a peninsula.',
    imageUrl: ExampleTour,
    time: 'full Day',
    price: '80000',
  },
  {
    id: 21,
    slug: 'garni-temple-geghard-monastery',
    title: 'Garni Temple & Geghard Monastery',
    description:
      'Visit the only pagan temple in the region and a unique rock-carved monastery complex.',
    imageUrl: ExampleTour,
    time: 'half Day',
    price: '70000',
  },
  {
    id: 31,
    slug: 'tatev-monastery-ropeway',
    title: 'Tatev Monastery & Ropeway',
    description:
      'Ride the world’s longest reversible cable car to explore the majestic Tatev Monastery.',
    imageUrl: ExampleTour,
    time: 'Full Day',
    price: '110000',
  },
  {
    id: 41,
    slug: 'dilijan-parz-lake',
    title: 'Dilijan & Parz Lake',
    description:
      'Lush forests, crystal-clear lakes, and cozy cafés in Armenia’s “Little Switzerland.”',
    imageUrl: ExampleTour,
    time: 'full Day',
    price: '95000',
  },
  {
    id: 51,
    slug: 'areni-wine-noravank',
    title: 'Areni Wine & Noravank',
    description:
      'Taste Armenia’s finest wines in Areni and visit the jaw-dropping red rock Noravank Monastery.',
    imageUrl: ExampleTour,
    time: 'full Day',
    price: '85000',
  },
  {
    id: 61,
    slug: 'khor-virap-mount-ararat',
    title: 'Khor Virap & Mount Ararat View',
    description:
      'Explore the sacred monastery with iconic views of Mount Ararat near the Turkish border.',
    imageUrl: ExampleTour,
    time: 'half Day',
    price: '65000',
  },
  {
    id: 71,
    slug: 'gyumri-cultural-tour',
    title: 'Gyumri Cultural Tour',
    description:
      'Dive into Armenia’s artistic and architectural second city with rich culture and history.',
    imageUrl: ExampleTour,
    time: 'full Day',
    price: '90000',
  },
  {
    id: 81,
    slug: 'amberd-fortress-aragats',
    title: 'Amberd Fortress & Aragats',
    description:
      'Medieval fortress ruins set against the stunning backdrop of Mount Aragats.',
    imageUrl: ExampleTour,
    time: 'full Day',
    price: '100000',
  },
  {
    id: 91,
    slug: 'yerevan-city-tour',
    title: 'Yerevan City Tour',
    description:
      'Discover Republic Square, Cascade, museums, and local markets in Armenia’s capital.',
    imageUrl: ExampleTour,
    time: 'half Day',
    price: '50000',
  },
  {
    id: 101,
    slug: 'haghpat-sanahin-monasteries',
    title: 'Haghpat & Sanahin Monasteries',
    description:
      'UNESCO heritage twin monasteries with dramatic landscapes in northern Armenia.',
    imageUrl: ExampleTour,
    time: 'full Day',
    price: '120000',
  },
];

export const faqs = [
  {
    question: 'What is the best time to visit Armenia?',
    answer:
      'Spring and Autumn are the best seasons due to pleasant weather and beautiful natural scenery.',
  },
  {
    question: 'Are the tours guided?',
    answer:
      'Yes, all our tours include experienced local guides who speak multiple languages.',
  },
  {
    question: 'Can I customize my tour itinerary?',
    answer:
      'Absolutely! We offer fully customizable tour packages to suit your interests and schedule.',
  },
  {
    question: 'What is included in the tour package?',
    answer:
      'Most tours include transportation, accommodations, guided services, and entry fees to major attractions.',
  },
];

export const mockBlogs = [
  {
    id: 111,
    slug: 'sevan-lake-sevanavank',
    title: 'Sevan Lake & Sevanavank',
    description:
      'Scenic lake surrounded by mountains and the historic Sevanavank Monastery on a peninsula.',
    imageUrl: ExampleTour,
  },
  {
    id: 211,
    slug: 'garni-temple-geghard-monastery',
    title: 'Garni Temple & Geghard Monastery',
    description:
      'Visit the only pagan temple in the region and a unique rock-carved monastery complex.',
    imageUrl: ExampleTour,
  },
];
