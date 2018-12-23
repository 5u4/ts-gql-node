import * as yup from "yup";

export const posts = {
    index: async (resolve: any, __: any, args: GQL.IPostsOnQueryArguments) => {
        await yup.object().shape({
            page: yup.number().notRequired().min(1),
            perPage: yup.number().notRequired().min(1),
        }).validate(args, { abortEarly: false });

        return resolve();
    },
    store: async (resolve: any, __: any, args: GQL.ICreatePostOnMutationArguments) => {
        await yup.object().shape({
            content: yup.string().required(),
        }).validate(args, { abortEarly: false });

        return resolve();
    },
};
