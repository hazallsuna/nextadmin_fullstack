import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Homepage = () => {
  const router = useRouter();

  useEffect(() => {
    
    router.push('/dashboard');
  }, []);

}

export default Homepage;
