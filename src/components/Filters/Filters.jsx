import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Filters = () => {
  return (
    <Stack spacing={2} direction="row" justifyContent="center">
      <Button variant="outlined">Сумки</Button>
      <Button variant="outlined">Гаманці</Button>
      <Button variant="outlined">Пояси</Button>
      <Button variant="outlined">Рюкзаки</Button>
    </Stack>
  );
};

export default Filters;
