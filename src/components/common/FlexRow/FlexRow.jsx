

const FlexRow = ({ children }) => {
  return (
    <FlexRow
      direction="row"
      justifyContent="flex-between"
      alignItems="center"
      spacing={2}
    >
      {children}
    </FlexRow>
  );
};

export default FlexRow;
