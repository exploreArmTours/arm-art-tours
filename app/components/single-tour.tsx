import React from 'react';

const SingleTour = ({ id }: { id: number }) => {
  return (
    <div className='bg-white min-h-screen px-6 py-16 md:px-24 lg:px-32'>{`SingleTour by id ${id}`}</div>
  );
};

export default SingleTour;
