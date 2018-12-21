export interface ResolverMap {
    [key: string]: {
        [key: string]: (root: any, args: any, ctx: any, info: any) => any;
    };
}
