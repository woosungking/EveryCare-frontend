export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
};

export const formatDateObject = (date: string[]) => {
  switch (date[1]) {
    case 'Jan':
      date[1] = '01';
      break;
    case 'Feb':
      date[1] = '02';
      break;
    case 'Mar':
      date[1] = '03';
      break;
    case 'Apr':
      date[1] = '04';
      break;
    case 'May':
      date[1] = '05';
      break;
    case 'Jun':
      date[1] = '06';
      break;
    case 'Jul':
      date[1] = '07';
      break;
    case 'Aug':
      date[1] = '08';
      break;
    case 'Sep':
      date[1] = '09';
      break;
    case 'Oct':
      date[1] = '10';
      break;
    case 'Nov':
      date[1] = '11';
      break;
    case 'Dec':
      date[1] = '12';
      break;
  }
  const formatedDate = date[3] + '-' + date[1] + '-' + date[2];
  return formatedDate;
};
