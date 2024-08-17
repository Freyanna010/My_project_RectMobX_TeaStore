import { observer } from "mobx-react-lite";
import classes from "./login.module.css";
import { FC, useState } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { NameValidation, passwordValidation } from "./validation";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { grey, pink } from "@mui/material/colors";
import { Visibility, VisibilityOff } from "@mui/icons-material";

//TODO:Вынести?
const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
    },
    error: {
      main: pink[500],
    },
  },
});

//TODO:тоже вынести в mоdеls? или там только бизнес-логика?
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

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="name"
            rules={NameValidation}
            render={({ field }) => (
              <TextField
                label="name"
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
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <input type="submit" value="log in" />
        </form>
      </div>
    </ThemeProvider>
  );
};
export default observer(Login);
    