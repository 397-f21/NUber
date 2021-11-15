import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref } from 'firebase/database';
import { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyBwPLWlMgwIgbd1KOZKBsFRzjv5dLmzp4g",
  authDomain: "purpleproject2397.firebaseapp.com",
  projectId: "purpleproject2397",
  storageBucket: "purpleproject2397.appspot.com",
  messagingSenderId: "279037798837",
  appId: "1:279037798837:web:88f227092c1322184311fc"
};

const firebase = initializeApp(firebaseConfig);
export const database = getDatabase(firebase);

export const useData = (path, transform) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, path);
    const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    if (devMode) { console.log(`loading ${path}`); }
    return onValue(dbRef, (snapshot) => {
      const val = snapshot.val();
      if (devMode) { console.log(val); }
      setData(transform ? transform(val) : val);
      setLoading(false);
      setError(null);
    }, (error) => {
      setData(null);
      setLoading(false);
      setError(error);
    });
  }, [path, transform]);

  return [data, loading, error];
};