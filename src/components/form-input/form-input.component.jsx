import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input autoComplete="no" className="form-input" {...otherProps} />
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        }  form-input-label`}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
