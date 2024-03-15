

const Label = (props) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const{htmlFor,children}=props;
  return (
    <label
      htmlFor={htmlFor}
      className="block text-slate-700 text-sm font-bold mb-2"
    >
      {children}
    </label>
  );
};

export default Label;
