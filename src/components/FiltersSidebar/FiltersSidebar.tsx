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
            padding: "30px",
            width: sidebarWidth,
            top: "131px",
            borderRight: "var(--thick-border)",
          },
        }}
      >
        <FiltersForm />
      </Drawer>
    </>
  );
};

export default FiltersSidebar;
