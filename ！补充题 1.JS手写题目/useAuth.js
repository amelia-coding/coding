import { useState, useEffect } from 'react';

function getAuth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('admin');
    }, 3000);
  });
}

export default function useAuth() {
  const [author, setAuthor] = useState<string>('');
  useEffect(() => {
    (async function () {
      const auth = await getAuth();
      setAuthor(auth);
    })();
  }, []);
  return [author];
}