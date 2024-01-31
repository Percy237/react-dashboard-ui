import { FormProvider, useForm } from "react-hook-form";
import { FormInput } from "./FormInput";

const Form = () => {
  const methods = useForm();
  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });
  return (
    <FormProvider {...methods}>
      <form
        className="form"
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
      >
        <div>
          <FormInput
            label="name"
            type="text"
            id="name"
            placeholder="type your name..."
            validation={{
              required: {
                value: true,
                message: "required",
              },
              maxLength: {
                value: 3,
                message: "min 3 characters",
              },
            }}
          />
          <FormInput
            label="email"
            type="email"
            id="email"
            placeholder="type your email..."
            validation={{
              required: {
                value: true,
                message: "required",
              },
              pattern: {
                value:
                  /^([a-zA-Z0-9._%-]+@(gmail|yahoo|outlook)\.(com|org|net))$/,
                message: "Please enter a valid email",
              },
            }}
          />
          <FormInput
            label="password"
            type="password"
            id="password"
            placeholder="type your password..."
            validation={{
              required: {
                value: true,
                message: "required",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
                message: "8-20 characters, 1 number, 1 letter, 1 symbol.",
              },
            }}
          />
          <button className="form-button" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
