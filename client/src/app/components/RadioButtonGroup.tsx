import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

interface Props {
  options: any[];
  selectedValue: string;
  onChange: (event: any) => void;
}

export function RadioButtonGroup({ options, selectedValue, onChange }: Props) {
  return (
    <FormControl component="fieldset">
      <RadioGroup onChange={onChange} value={selectedValue}>
        {options.map(({ value, label }) => {
          return (
            <FormControlLabel
              value={value}
              control={<Radio />}
              label={label}
              key={value}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
