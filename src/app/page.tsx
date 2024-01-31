// pages/index.tsx
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Sample</h1>
      <Link href="../app/pages/about-us" as="/about-us">
        About Us
      </Link>
    </main>
  );
};

export default Home;
