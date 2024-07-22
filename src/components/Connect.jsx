// src/components/Connect.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Connect = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const publicKey = params.get('public_key');

    if (publicKey) {
      console.log('Connected with wallet public key:', publicKey);
      window.location.href = `nocena://connect?public_key=${publicKey}`;
    }
  }, [location]);

  return (
    <div>
      <h1>Connecting to Nocena App...</h1>
    </div>
  );
};

export default Connect;
