// tslint:disable
// graphql typescript definitions

declare namespace GQL {
interface IGraphQLResponseRoot {
data?: IQuery;
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
movies: Array<IMovie | null>;
people: Array<IPerson | null>;
}

interface IHelloOnQueryArguments {
name?: string | null;
}

interface IMoviesOnQueryArguments {
pagination?: IPaginationInput | null;
}

interface IPeopleOnQueryArguments {
pagination?: IPaginationInput | null;
}

interface IPaginationInput {
page: number;
perPage: number;
}

interface IMovie {
__typename: "Movie";
title: string;
released: number;
tagline: string | null;
}

interface IPerson {
__typename: "Person";
name: string;
born: number | null;
}
}

// tslint:enable
