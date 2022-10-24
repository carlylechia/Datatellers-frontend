import React from 'react';
import { useGetSchedulesQuery } from '../redux/api-functions';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const { data, error, isLoading } = useGetSchedulesQuery();

  console.log(data);
  return (
    <div>
      {data}
    </div>
  );
};

export default Home;
