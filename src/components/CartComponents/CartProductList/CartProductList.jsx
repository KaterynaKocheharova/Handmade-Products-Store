import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack, Typography } from "@mui/material";
import QuantityControl from "../QuantityControl/QuantityControl";

const CartProductList = ({ products }) => {
  return (
    <TableContainer component={Paper} sx={{maxWidth: "700px"}}>
      <Table aria-label="table cart">
        <TableHead>
          <TableRow>
            <TableCell>ТОВАР</TableCell>
            <TableCell align="left">КІЛЬКІСТЬ</TableCell>
            <TableCell align="left">ВАРТІСТЬ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(({ id, name, image, new_price }) => (
            <TableRow key={id}>
              <TableCell component="th" align="left">
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <img src={image} alt="cart product picture" width={300} />
                  <Typography>{name}</Typography>
                </Stack>
              </TableCell>
              <TableCell align="left" scope="column" >
                <QuantityControl />
              </TableCell>
              <TableCell align="left">THIRD CELL</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartProductList;
