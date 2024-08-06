import { useSelector } from "react-redux";
import { selectFinalCartProducts } from "../../../redux/cart/cartSelectors";
import QuantityControl from "components/common/QuantityControl/QuantityControl";
import FlexRow from "components/common/FlexRow/FlexRow";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";

export default function CartProductList() {
  const products = useSelector(selectFinalCartProducts);

  // const StyledTableRow = styled(TableRow) ({
  //  padding: "8px"
  //   });

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Кошик ваших товарів</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(({ id, name, new_price, image }) => (
            <TableRow key={id}>
              <TableCell>
                <FlexRow spacing={3}>
                  <img src={image} alt="cart product image" width="100" />
                  <p>{name}</p>
                  <p>{new_price} грн</p>
                  <QuantityControl />
                </FlexRow>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
