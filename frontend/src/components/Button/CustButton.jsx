import PropTypes from "prop-types";
import "./Button.scss";

export const CustButton = ({
  link,
  text,
  onClick,
  color = "orange",
  className,
  disabled = false,
}) => {
  return (
    <>
      {link ? (
        <a
          href={link}
          onClick={onClick}
          type="button"
          className={
            `btn btn-${color}-gm ${disabled ? "disabled" : ""} ` + className
          }
        >
          {text}
        </a>
      ) : (
        <button
          onClick={onClick}
          type="button"
          disabled={disabled}
          className={`btn btn-${color}-gm ` + className}
        >
          {text}
        </button>
      )}
    </>
  );
};

CustButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
