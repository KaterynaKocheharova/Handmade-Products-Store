import { useSelector } from "react-redux";
import { selectFinalCartProducts } from "../../../redux/cart/cartSelectors";
import CartItem from "../CartItem/CartItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CartProductList() {
  const products = useSelector(selectFinalCartProducts);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Кошик ваших товарів</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
