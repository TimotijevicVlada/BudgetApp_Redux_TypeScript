type ValuesProps = {
    name: string
    total: number
}

type ValidationProps = {
    name: string
    total: string
}
//Custom form validation
export const validate = (values: ValuesProps) => {
    //Or it can be const errors = <ValidationProps>{}
    const errors = {} as ValidationProps;

    if (!values.name) {
        errors.name = "Name is required!";
    }

    if (!values.total) {
        errors.total = "Total is required!";
    }

    return errors;
};