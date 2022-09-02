import {
  FieldError,
  FieldValues,
  UseControllerProps,
  useController,
  useFormContext,
} from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

type Props<T extends FieldValues> = UseControllerProps<T> & TextFieldProps;

const FormInput = <T extends FieldValues>(props: Props<T>) => {
  const { name, rules, defaultValue, ...inputProps } = props;

  const formContext = useFormContext<T>();
  const { control } = formContext;

  const { field, fieldState } = useController<T>({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <TextField
      error={!!fieldState.error}
      fullWidth
      helperText={(fieldState.error as FieldError)?.message}
      margin="dense"
      size="small"
      variant="outlined"
      {...{ ...field, ...inputProps }}
      onBlur={(event) => {
        props.onBlur?.(event);
        field.onBlur();
      }}
      onChange={(event) => {
        props.onChange?.(event);
        field.onChange(event);
      }}
    />
  );
};

export default FormInput;
