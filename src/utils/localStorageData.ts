export const addLocalStorage = (id: string) => {
  const data = localStorage.getItem('favorites');
  if (!data) {
    const newData = [id];
    localStorage.setItem('favorites', JSON.stringify(newData));
  } else {
    const parseData: string[] = JSON.parse(data);
    parseData.push(id);
    localStorage.setItem('favorites', JSON.stringify(parseData));
  }
};

export const removeLocalStorage = (id: string) => {
  const data = localStorage.getItem('favorites');
  if (!data) return;
  const parseData: string[] = JSON.parse(data);
  const index = parseData.findIndex((el) => el === id);
  parseData.splice(index, 1);
  localStorage.setItem('favorites', JSON.stringify(parseData));
};

export const checkLocalStorage = (id: string): boolean => {
  const data = localStorage.getItem('favorites');
  if (!data) return false;
  const parseData: string[] = JSON.parse(data);
  return !!parseData.find((el) => el === id);
};
