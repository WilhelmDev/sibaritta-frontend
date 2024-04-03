import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ children }: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user_id = localStorage.getItem('fk_typeuser');

    if (user_id === '2') {
      router.push('/home_partner');
    } else if (user_id === '3') {
      router.push('/admin/admin_home');
    }

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return <div>{loading ? <div className='w-full h-screen grid place-items-center'>
  <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div> : <>{children}</>}</div>;
};

export default ProtectedRoute;
