import { Effect } from './effect';
import { Nature } from './nature';

export class Group {
    _id: string;
    name: string;
    parent: Group;
    effect: Effect;
    nature: Nature;
    isSystemGenerated: boolean;
    details: {
        mailing: boolean;
        contact: boolean;
        bank: boolean;
        tax: boolean;
    };
    voucher: {
        contra: {
            credit: boolean;
            debit: boolean;
        }
        payment: {
            credit: boolean;
            debit: boolean;
        };
        receipt: {
            credit: boolean;
            debit: boolean;
        };
        journal: {
            credit: boolean;
            debit: boolean;
        };
    };

    constructor(_id: string, name: string, parent: Group, effect: Effect, nature: Nature, isSystemGenerated: boolean,
                details: object, voucher: object) { }
}
