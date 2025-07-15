export type Item = {
    id: number;
    name: string;
    category: string;
}

export const mockList: Item[] = [
    { id: 1, name: "Item One", category: "A" },
    { id: 2, name: "Item Two", category: "B" },
    { id: 3, name: "Item Three", category: "A" },
];