import * as yup from "yup";

export const helloValidator = async (resolve: any, __: any, args: GQL.IHelloOnQueryArguments) => {
    await yup.object().shape({
        name: yup.string().notRequired().trim()
            .matches(/^[a-zA-z ]+$/, "Name should be alphabatically only"),
    }).validate(args, { abortEarly: false });

    return resolve();
};
