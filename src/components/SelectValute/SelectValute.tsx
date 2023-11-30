import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent,
} from '@mui/material';
import React, { useEffect } from 'react';
import { IValute } from '../../store/types/valuteType';
import { findValute } from '../../utils';
import { useActions } from '../../hooks';

interface ISelectValute {
  data: IValute[];
}

export const SelectValute = ({ data }: ISelectValute) => {
  const [age, setAge] = React.useState(data[0]?.ID ?? '');
  const { currentValuteRequest } = useActions();

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  useEffect(() => {
    currentValuteRequest(findValute(age, data));
  }, [age, data]);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Базовая валюта
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Базовая валюта"
          onChange={handleChange}
        >
          {data.map((valute) => {
            return (
              <MenuItem key={valute.ID} value={valute.ID}>
                {valute.Name}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText>Выберите базовую валюту</FormHelperText>
      </FormControl>
    </Box>
  );
};
