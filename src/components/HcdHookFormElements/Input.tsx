import React from "react";
import { Controller } from "react-hook-form";
import { Input } from "components/input";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
}

export const HcdHookFormInput = (props: InputProps) => {
    let labelContent = props.required ? props.label + " *" : props.label;
    return (
        <Controller
            name={props.name}
            render={({ field, fieldState }) => {
                const haveError: boolean = !!fieldState.error;
                const errorText: string = fieldState.error?.message;
                return (
                    <Input
                        {...field}
                        {...props}
                        label={labelContent}
                        error={haveError}
                        errorText={errorText}
                    />
                );
            }}
        />
    );
};
