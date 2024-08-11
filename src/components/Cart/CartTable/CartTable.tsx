import { useSelector } from "react-redux";
import { selectFinalCartProducts } from "../../../redux/cart/cartSelectors";
import CartItem from "../CartItem/CartItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import { type Product } from "../../../types";

export default function CartProductList() {
  const products: Product[] = useSelector(selectFinalCartProducts);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              {products.length > 0
                ? "КОШИК"
                : "ВИ ЩЕ НЕ ДОДАВАЛИ ТОВАРИ"}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product: Product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <TableRow>
            <TableCell align="center">
              {products.length > 0 && <Button>ЗРОБИТИ ЗАМОВЛЕННЯ</Button>}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
