const FlexColumn = ({ children }) => {
  return (
    <FlexColumn
      direction="column"
      justifyContent="flex-between"
      alignItems="center"
      spacing={2}
    >
      {children}
    </FlexColumn>
  );
};

export default FlexColumn;
