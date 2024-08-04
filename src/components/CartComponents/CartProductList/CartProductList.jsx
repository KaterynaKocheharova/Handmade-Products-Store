import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack, Typography } from "@mui/material";
import QuantityControl from "../QuantityControl/QuantityControl";
import FlexColumn from "components/common/FlexColumn/FlexColumn";
import FlexRow from "components/common/FlexRow/FlexRow";
import { useSelector } from "react-redux";
import { selectFinalCartProducts } from "../../../redux/cart/cartSelectors";

const CartProductList = () => {
  const cartProducts = useSelector(selectFinalCartProducts);
  console.log(cartProducts);
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "700px" }}>
      <Table aria-label="table cart">
        <TableHead>
          <TableRow>
            <TableCell>ТОВАР</TableCell>
            <TableCell align="left">КІЛЬКІСТЬ</TableCell>
            <TableCell align="left">ВАРТІСТЬ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartProducts.map(({ id, name, image, new_price }) => (
            <TableRow key={id}>
              <TableCell component="th" align="left">
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={2}
                >
                  <img src={image} alt="cart product picture" width={300} />
                  <FlexColumn>
                    <Typography>{name}</Typography>
                    <Typography>{new_price}</Typography>
                  </FlexColumn>
                </Stack>
              </TableCell>
              <TableCell align="left" scope="column">
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
