import React from "react";
import { ChromePicker } from "react-color";

const ColorPicker = (props) => {
  const { value, setValue } = props;
  console.log(props);
  return (
    <ChromePicker color={value} onChangeComplete={(v) => setValue(v.hex)} />
  );
};

export default ColorPicker;
