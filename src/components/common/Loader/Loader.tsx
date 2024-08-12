type Loader = {
  children?: React.ReactNode;
}

const Loader = ({ children } : Loader ) => {
  return <div>{children}</div>;
};

export default Loader;
