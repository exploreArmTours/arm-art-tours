'use client';
import { Text, TextStyle } from '@/elements/typography/text';
import { useState } from 'react';
import TextField from '@/elements/input/input';
import Button from '@/elements/button/button';

const Counter = ({ price }: { price: string }) => {
  const [countOfPeople, setCountOfPeople] = useState(0);

  const decreaseCountOfPeople = () => {
    setCountOfPeople((prev) => prev - 1);
  };

  const increaseCountOfPeople = () => {
    setCountOfPeople((prev) => prev + 1);
  };

  const numericPrice = parseInt(price.replace(/[^0-9]/g, '')) || 0;
  const totalPrice = countOfPeople * numericPrice;

  return (
    <div className='flex flex-col gap-4'>
      <div className='w-full max-w-md bg-primary-50 rounded-xl shadow-md p-6 mt-4'>
        <Text
          value='Number of People'
          style={TextStyle.BodySmSemibold}
          className='text-primary-800 uppercase tracking-wide text-center mb-4'
        />

        <div className='flex items-center justify-center gap-4 mb-6'>
          <Button
            onClick={decreaseCountOfPeople}
            disabled={countOfPeople <= 0}
            variant={countOfPeople <= 0 ? 'disabled' : 'primary'}
            className='w-10 h-10 text-xl font-bold bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center justify-center'>
            –
          </Button>

          <TextField
            id='people-count'
            value={countOfPeople}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              setCountOfPeople(
                isNaN(value) ? 0 : value > 10 ? 10 : value < 0 ? 0 : value,
              );
            }}
            inputClassName='text-center text-lg font-medium'
            placeholder='0'
            isRequired
          />

          <Button
            onClick={increaseCountOfPeople}
            disabled={countOfPeople >= 10}
            variant={countOfPeople >= 10 ? 'disabled' : 'primary'}
            className='w-10 h-10 text-xl font-bold bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center justify-center'>
            +
          </Button>
        </div>

        <div className='text-center text-lg font-semibold text-primary-700'>
          Total: ${totalPrice}
        </div>
      </div>
      <Text
        value='You can only book up to 10 people'
        style={TextStyle.BodySmNormal}
        className='text-primary-600'
      />
    </div>
  );
};

export default Counter;
