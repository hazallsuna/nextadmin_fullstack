"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard');
  }, []);

  return null;
};

export default Homepage;