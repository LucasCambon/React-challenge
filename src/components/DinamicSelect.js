import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function DinamicSelect({defaultValue, information, name}){


    return(
        <FormControl sx={{minWidth: "100px"}}>
            <NativeSelect
            inputProps={{
                defaultValue:defaultValue,
                name: {name},
                id: 'uncontrolled-native-'+name,
            }}
            >
                {information.map((row,i) => {
                    return (
                        <option key={row+i} value={row.value}>{row.text}</option>
                    )
                })}
            </NativeSelect>
        </FormControl>
    )
}