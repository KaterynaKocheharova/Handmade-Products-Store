import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { selectIsFiltrationSidebarOpen } from "../../redux/sidebar/sidebarSelectors";
import { toggleSidebar } from "../../redux/sidebar/sidebarSlice";
import Drawer from "@mui/material/Drawer";

type FiltersSidebarProps = {
  sidebarWidth: string;
};

const FiltersSidebar = ({ sidebarWidth }: FiltersSidebarProps) => {
  const isSidebarOpen = useAppSelector(selectIsFiltrationSidebarOpen);
  const dispatch = useAppDispatch();
  return (
    <>
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={() => dispatch(toggleSidebar({ type: "filtration" }))}
        variant="persistent"
        PaperProps={{
          sx: {
            padding: "30px",
            width: sidebarWidth,
            top: "131px",
            borderRight: "var(--thick-border)",
          },
        }}
      >
        FILTRATION WILL BE HERE
      </Drawer>
    </>
  );
};

export default FiltersSidebar;
