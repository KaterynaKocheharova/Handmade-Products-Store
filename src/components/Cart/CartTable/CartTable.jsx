import { useSelector } from "react-redux";
import { selectFinalCartProducts } from "../../../redux/cart/cartSelectors";
import QuantityControl from "components/common/QuantityControl/QuantityControl";

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
            <TableCell align="left">Фото</TableCell>
            <TableCell align="left">Назва, ціна</TableCell>
            <TableCell align="left">Кількість</TableCell>
            <TableCell align="left">Загальна ціна</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(({ id, name, new_price, image }) => (
            <TableRow key={id}>
              <TableCell>
                <img src={image} alt="cart product image" width="100" />
              </TableCell>
              <TableCell component="th" scope="row">
                {name}
                {new_price}
              </TableCell>
              <TableCell>
                <QuantityControl />
              </TableCell>
              <TableCell>0</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

