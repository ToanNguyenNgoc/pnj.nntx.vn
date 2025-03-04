/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

interface AppButtonProps extends ButtonProps { }

export const AppButton: FC<AppButtonProps> = (props) => {
  const { ...rest } = props
  return (
    <Button
      variant={props.variant || 'contained'}
      {...rest}
      style={Object.assign({ textTransform: 'none' }, props.style)}
    >
      {props.children}
    </Button>
  )
}