/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TodoItemCreateFormInputValues = {
    content?: string;
};
export declare type TodoItemCreateFormValidationValues = {
    content?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoItemCreateFormOverridesProps = {
    TodoItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TodoItemCreateFormProps = React.PropsWithChildren<{
    overrides?: TodoItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TodoItemCreateFormInputValues) => TodoItemCreateFormInputValues;
    onSuccess?: (fields: TodoItemCreateFormInputValues) => void;
    onError?: (fields: TodoItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TodoItemCreateFormInputValues) => TodoItemCreateFormInputValues;
    onValidate?: TodoItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function TodoItemCreateForm(props: TodoItemCreateFormProps): React.ReactElement;
