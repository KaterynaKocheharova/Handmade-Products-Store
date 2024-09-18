import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { IoMdArrowBack } from "react-icons/io";
import css from "./BackLink.module.css";

type BackLinkProps = {
  to: string;
};

const BackLink = ({ to }: BackLinkProps) => {
  return (
    <Link to={to} className={css.backlink}>
      <Button variant="outlined" startIcon={<IoMdArrowBack />}>
        Назад
      </Button>
    </Link>
  );
};

export default BackLink;
