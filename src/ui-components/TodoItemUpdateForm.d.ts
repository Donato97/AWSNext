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
export declare type TodoItemUpdateFormInputValues = {
    content?: string;
};
export declare type TodoItemUpdateFormValidationValues = {
    content?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TodoItemUpdateFormOverridesProps = {
    TodoItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TodoItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: TodoItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    todoItem?: any;
    onSubmit?: (fields: TodoItemUpdateFormInputValues) => TodoItemUpdateFormInputValues;
    onSuccess?: (fields: TodoItemUpdateFormInputValues) => void;
    onError?: (fields: TodoItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TodoItemUpdateFormInputValues) => TodoItemUpdateFormInputValues;
    onValidate?: TodoItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TodoItemUpdateForm(props: TodoItemUpdateFormProps): React.ReactElement;
