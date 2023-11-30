import { Container } from '@mui/material';
import { useEffect } from 'react';
import {
  Error,
  Loader,
  SelectValute,
  TableConverter,
} from './components';
import { useActions, useTypedSelector } from './hooks';

function App() {
  const { valuteRequestAsync } = useActions();
  const { data, loading, error } = useTypedSelector(
    (state) => state.valute
  );

  useEffect(() => {
    valuteRequestAsync();
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 6 }}
    >
      {error ? (
        <Error />
      ) : loading ? (
        <Loader />
      ) : (
        <>
          <SelectValute data={data} />
          <TableConverter />
        </>
      )}
    </Container>
  );
}

export default App;
