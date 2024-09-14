import { ThemeProvider } from '@mui/material/styles';
import { FC } from "react";
import { useForm, useFormState } from "react-hook-form";
import { themeForm } from "../../theme/theme";
import classes from "./login.module.css";
import InputName from './InputName';
import InputPassword from './InputPassword';



type Input = {
  name: string;
  password: string;
};

const Login: FC = () => {
  const { handleSubmit, control, setValue } = useForm<Input>({
    mode: "onBlur",
  });
  const { errors } = useFormState({ control });

  const onSubmit = (data: Input) => {
    console.log(data);
    setValue("name", "");
    setValue("password", "");
  };
  return (
    <ThemeProvider theme={themeForm}>
      <div className={classes.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputName control={control} errors={errors} />
          <InputPassword control={control} errors={errors} />
          <input type="submit" value="login" />
        </form>
      </div>
    </ThemeProvider>
  );
};

export default Login;
