import {Borrow} from "./borrow";

export interface Borrower {
    id: number;
    name: string;
    surname: string;
    ssn: number;
    borrowedItem: Array<Borrow>;
}