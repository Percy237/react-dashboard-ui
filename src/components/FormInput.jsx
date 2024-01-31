import { AnimatePresence, motion } from "framer-motion";
import "../css/input.css";
import { useFormContext } from "react-hook-form";
import { findInputError } from "../utils/findInputError";
import { isFormInvalid } from "../utils/isFormValid";
import { BiErrorCircle } from "react-icons/bi";

export const FormInput = ({ label, type, id, placeholder, validation }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, label);
  const isInvalid = isFormInvalid(inputError);
  return (
    <div className="input-field">
      <label htmlFor={id}>{label}:</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(label, validation)}
      />
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.small {...framer_error} className="error">
      <BiErrorCircle /> {message}
    </motion.small>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};
