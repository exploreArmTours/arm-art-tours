'use client';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Text, TextStyle } from '@/elements/typography/text';
import { faqs } from '@/constants/data';
import { useTranslation } from 'react-i18next';
import { useFAQ } from '@/hooks/useFAQ';

export default function FaqSection() {
  const { i18n } = useTranslation();
  // const { data: faqs=[],isLoading, isError } = useFAQ();

  //  if (isLoading) return <div className='text-center'>Loading FAQs...</div>;
  // if (isError) return <div className='text-center text-red-500'>Failed to load FAQs</div>;
  return (
    <div className='w-full px-6 md:px-24 lg:px-48'>
      <Text
        value='FAQ'
        style={TextStyle.Header2}
        className='text-center mb-8 text-4xl font-bold text-primary-700' //Header1 @ chi @ndunum
      />
      <div className='mx-auto w-full max-w-4xl rounded-2xl bg-white p-4 shadow-md flex flex-col gap-4'>
        {faqs.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <div>
                <DisclosureButton className='flex w-full justify-between rounded-lg bg-primary-100 px-4 py-4 text-left text-white hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <Text
                    style={TextStyle.BodyLgSemiBold}
                    value={faq.question}
                    // value={faq.translation[i18n.language].question || faq.translation['en'].question}
                    className='text-primary-700'
                  />
                  <ChevronUpIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-primary-100`}
                  />
                </DisclosureButton>
                <Transition
                  enter='transition duration-600 ease-out'
                  enterFrom='transform scale-95 opacity-0'
                  enterTo='transform scale-100 opacity-100'
                  leave='transition duration-200 ease-out'
                  leaveFrom='transform scale-100 opacity-100'
                  leaveTo='transform scale-95 opacity-0'>
                  <DisclosurePanel
                    transition
                    className='px-4 pt-2 pb-[10px] text-primary-600 origin-top transition duration-200 ease-out data-closed:-translate-y-6 data-closed:opacity-0'>
                    <Text
                      style={TextStyle.BodyMdNormal}
                      value={faq.answer}
                      // value={faq.translation[i18n.language].answer || faq.translation['en'].answer}
                      className='text-primary-700'
                    />
                  </DisclosurePanel>
                </Transition>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

// export const faqs = [
//   {
//     question: 'What is the best time to visit Armenia?',
//     answer:
//       'Spring and Autumn are the best seasons due to pleasant weather and beautiful natural scenery.',
//   },
//   {
//     question: 'Are the tours guided?',
//     answer:
//       'Yes, all our tours include experienced local guides who speak multiple languages.',
//   },
//   {
//     question: 'Can I customize my tour itinerary?',
//     answer:
//       'Absolutely! We offer fully customizable tour packages to suit your interests and schedule.',
//   },
//   {
//     question: 'What is included in the tour package?',
//     answer:
//       'Most tours include transportation, accommodations, guided services, and entry fees to major attractions.',
//   },
// ];

//json
// [
//   {
//     "id": 1,
//     "translations": {
//       "en": {
//         "question": "What is the best time to visit Armenia?",
//         "answer": "Spring and Autumn are the best seasons..."
//       },
//       "hy": {
//         "question": "Ո՞րն է Հայաստան այցելելու լավագույն ժամանակը:",
//         "answer": "Գարունը և աշունը ամենահարմար եղանակներն են..."
//       },
//       "ru": {
//         "question": "Когда лучше всего посетить Армению?",
//         "answer": "Весна и осень — лучшие сезоны..."
//       }
//     }
//   },
//   ...
// ]
