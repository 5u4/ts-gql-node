interface DBPerson {
    name: string;
    born: DBInteger | undefined;
}

interface DBMovie {
    title: string;
    tagline: string;
    released: DBInteger,
}

interface DBInteger {
    low: number;
    high: number;
}
