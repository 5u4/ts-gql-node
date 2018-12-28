interface DBPerson {
    name: string;
    born: DBInteger | undefined;
}

interface DBInteger {
    low: number;
    high: number;
}
