import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectIsFiltrationSidebarOpen } from "../../redux/sidebar/sidebarSelectors";
import { toggleSidebar } from "../../redux/sidebar/sidebarSlice";
import { useMediaQuery } from "@mui/material";
import FiltersForm from "./FiltersForm";
import Drawer from "@mui/material/Drawer";

type FiltersSidebarProps = {
  sidebarWidth: string;
};

const FiltersSidebar = ({ sidebarWidth }: FiltersSidebarProps) => {
  const params = useParams();
  console.log(params)
  const isSidebarOpen = useAppSelector(selectIsFiltrationSidebarOpen);
  const dispatch = useAppDispatch();
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  return (
    <>
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={() => dispatch(toggleSidebar({ type: "filtration" }))}
        variant={isNonMobile ? "persistent" : "temporary"}
        PaperProps={{
          sx: {
            position: "fixed",
            top: "0",
            left: "0",
            bottom: "0",
            height: "100%",
            padding: "1rem",
            width: sidebarWidth,
          },
        }}
      >
        <FiltersForm />
      </Drawer>
    </>
  );
};

export default FiltersSidebar;
