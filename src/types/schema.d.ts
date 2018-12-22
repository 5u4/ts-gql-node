// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery | IMutation;
errors?: Array<IGraphQLResponseError>;
}

interface IGraphQLResponseError {
/** Required for all errors */
message: string;
locations?: Array<IGraphQLResponseErrorLocation>;
/** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
[propName: string]: any;
}

interface IGraphQLResponseErrorLocation {
line: number;
column: number;
}

interface IQuery {
__typename: "Query";
hello: string;
posts: Array<IPost | null>;
}

interface IHelloOnQueryArguments {
name?: string | null;
}

interface IPostsOnQueryArguments {
page?: number | null;
perPage?: number | null;
}

interface IPost {
__typename: "Post";
id: number;
content: string;
createdAt: number;
}

interface IMutation {
__typename: "Mutation";
createPost: IPost | null;
}

interface ICreatePostOnMutationArguments {
content: string;
}
}

// tslint:enable
