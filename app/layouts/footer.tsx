'use client';
//import CompanyLogo from '@/assets/images/logo.png';
import Link from 'next/link';
import { Text, TextStyle } from '@/elements/typography/text';
// import { useDataStore } from '@/store/zustand/data';
import PhoneSVG from '@/assets/icons/phone.svg';
import EmailSVG from '@/assets/icons/email.svg';
import FacebookSVG from '@/assets/icons/facebook.svg';
import TelegramSVG from '@/assets/icons/telegram.svg';
import InstagramSVG from '@/assets/icons/instagram.svg';
import WhatsAppSVG from '@/assets/icons/whatsapp.svg';
import ViberSVG from '@/assets/icons/viber.svg';
import Image from 'next/image';
import ExampleTour from '@/assets/images/exampletour.jpeg';

//missing refs for Links
const navigation = {
  services: [
    { name: 'About Us', href: '/about' },
    { name: 'Tours', href: '/our-tours' },
    { name: 'Blogs', href: '/our-blogs' },
  ],
  contact: [
    {
      name: 'armArtToursam@gmail.com',
      href: '#',
      icon: (
        <div className='text-white'>
          <EmailSVG />
        </div>
      ),
    },
    {
      name: '+374 93111112',
      href: '#',
      icon: (
        <div className='text-white'>
          <PhoneSVG />
        </div>
      ),
    },
  ],
};

const Footer = () => {
  return (
    <footer className='bg-primary-500 md:px-10 lg:px-24'>
      <div className='mx-auto max-w-7xl px-2 py-16 sm:py-10 lg:px-8'>
        <div className='ml-6 grid-cols-3 xl:grid xl:gap-8'>
          <Image
            src={ExampleTour}
            alt='Company Logo'
            width={64}
            height={64}
            className='mb-4 h-full max-h-16 w-full max-w-16 hover:cursor-pointer'
          />
          <div className='grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 text-white'>
            <div className='md:grid md:grid-cols-1 md:gap-8'>
              <div className='mt-10 md:mt-0'>
                <Text style={TextStyle.BodyXlSemiBold} value='Contacts' />
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.contact.map((item) => (
                    <li key={item.name} className='flex gap-3'>
                      {item.icon && item.icon}
                      <Link href={item.href}>
                        <Text
                          style={TextStyle.BodyBaseNormal}
                          value={item.name}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className=' text-white flex gap-2 mt-4'>
                  <Link href='/#' target='_blank'>
                    <InstagramSVG />
                  </Link>
                  <Link href='/#' target='_blank'>
                    <FacebookSVG />
                  </Link>
                  <Link href='/#' target='_blank'>
                    <TelegramSVG />
                  </Link>
                  <Link href='/#' target='_blank'>
                    <WhatsAppSVG />
                  </Link>
                  <Link href='/#' target='_blank'>
                    <ViberSVG />
                  </Link>
                </div>
              </div>
            </div>
            <div className='md:grid md:grid-cols-1 md:gap-8'>
              <div className='mt-10 md:mt-0'>
                <ul role='list' className='mt-6 space-y-4'>
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <Text
                          style={TextStyle.BodyBaseNormal}
                          value={item.name}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t-[1px] border-white text-white py-4 text-center'>
        <Text
          style={TextStyle.BodySmNormal}
          value={`© ${new Date().getFullYear()} ArmArt Tours, Armenia. All rights reserved.`}
        />
      </div>
    </footer>
  );
};

export default Footer;
