import { IValute } from '../store/types/valuteType';

export const findValute = (
  id: string,
  data: IValute[]
): IValute | undefined => {
  return data.find((valute) => valute.ID === id);
};
