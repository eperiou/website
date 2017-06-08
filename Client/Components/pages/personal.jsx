import React from 'react';
import Personals from './personals';
import personaldata from '../assets/personaldata';


const Personal = () => (
  <main className="personalpage">
    {personaldata.data.map((description, ind) => {
      const key = description.header + ind;
      return <Personals number={ind} description={description} key={key} />;
    })}
  </main>
);

export default Personal;
