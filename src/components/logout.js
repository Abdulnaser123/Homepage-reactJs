import React, {useEffect} from 'react';

function Logout() {
  useEffect(() => {
    localStorage.removeItem('password');
    localStorage.removeItem('email');
    window.location.href = '/login-page';
    console.log('local', localStorage);
  }, []);

  return <div>logout</div>;
}

export default Logout;
