import React from 'react';
import Image from 'next/image';
import Layout from './layout';

const Home: React.FC = () => {
  return (
    <main>
      <header className="flex justify-between items-center p-8">
        {/* ...navigation goes here */}
      </header>

      <section className="text-center p-20">
        <Image src="/yosimg.jpeg" alt="Profile Picture" width={244} height={244} className="square-full mx-auto" />
        <h1 className="text-4xl font-bold mt-6">Yoseph Latif</h1>
        <p className="font-light text-xl">Fullstack Developer</p>
        <p className="mt-4">I hate bugs 🐜</p>
      </section>

      {/* ...rest of the sections go here */}
      
      <footer className="p-8">
        {/* ...footer content goes here */}
      </footer>
      </main>
  );
};

export default Home;
