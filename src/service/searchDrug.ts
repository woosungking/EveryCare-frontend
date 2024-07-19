import axios from 'axios';

export const searchDrug = async (drugName: string) => {
  const drugData = await axios
    .get(`http://127.0.0.1:8000/test/${drugName}`)
    .then((response) => response.data);
  return drugData;
};

