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

export default function FaqSection() {
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
