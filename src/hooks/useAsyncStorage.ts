import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const useAsyncStorage = (key: string) => {
  const [data, setData] = useState<string>('');
  const [retrivedFromStorage, setRetrievedFromStorage] =
    useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem(key);
        if (value) {
          setData(JSON.parse(value));
        }
        setRetrievedFromStorage(true);
      } catch (error) {
        console.error('useAsyncStorage getItem error:', error);
      }
    })();
  }, [key]);

  return [data, retrivedFromStorage];
};
export default useAsyncStorage;
