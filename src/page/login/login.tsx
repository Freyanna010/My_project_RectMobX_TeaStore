import { observer } from "mobx-react-lite";
import classes from "./login.module.css";
import { FC } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { TextField } from "@mui/material";
import { pink } from "@mui/material/colors";
import { NameValidation, passwordValidation } from "./validation";

type Input = {
  name: string;
  password: string;
};

const Login: FC = () => {
  const { handleSubmit, control, setValue } = useForm<Input>({
    mode: "onBlur",
  });
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
    setValue("name", "");
    setValue("password", "");
  };

  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="name"
          rules={NameValidation}
          render={({ field }) => (
            <TextField
              label="name"
              size="small"
              variant="outlined"
              color="primary"
              fullWidth={true}
              margin="dense"
              className={classes.form_input}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.name?.message}
              helperText={errors.name?.message}
            />
          )}
        />
        {/*TODO: настроить темы */}
        <Controller
          control={control}
          name="password"
          rules={passwordValidation}
          render={({ field }) => (
            <TextField
              label="password"
              size="small"
              variant="outlined"
              color="primary"
              fullWidth={true}
              margin="dense"
              className={classes.form_input}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        />
        <input type="submit" value="log in" />
      </form>
    </div>
  );
};
export default observer(Login);
