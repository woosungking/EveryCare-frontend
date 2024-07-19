import { useQuery } from 'react-query';
import { searchDrug } from './searchDrug';

export const useSearchDrug = (drugName: string) => {
  const { data, isLoading, error } = useQuery([drugName], () =>
    searchDrug(drugName),
  );
  return {
    drugData: data,
    isLoading,
    error,
  };
};
