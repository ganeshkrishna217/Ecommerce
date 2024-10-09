import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";

interface Props {
  items: string[];
  checked?: string[];
  onChange: (items: string[]) => void;
}

export default function CheckButtonGroup({ items, checked, onChange }: Props) {
  const [checkedItems, setcheckedItems] = useState(checked || []);

  function handleChecked(value: string) {
    const curIndex = checkedItems.findIndex((x) => x === value);
    let newChecked: string[] = [];
    if (curIndex === -1) newChecked = [...checkedItems, value];
    else newChecked = checkedItems.filter((x) => x !== value);
    setcheckedItems(newChecked);
    onChange(newChecked);
  }
  return (
    <FormGroup>
      {items.map((brand) => {
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedItems.indexOf(brand) !== -1}
                onClick={() => handleChecked(brand)}
              />
            }
            label={brand}
            key={brand}
          />
        );
      })}
    </FormGroup>
  );
}
