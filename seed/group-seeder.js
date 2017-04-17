var Group = require('../models/masters/group/group');
var Effect = require('../models/masters/group/effect');
var Nature = require('../models/masters/group/nature');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/accountdb');

function seedGroups(groupName, alias, parentName, effectName, natureName, isSystemGroup, mailing, contact, bank, tax, paymentCredit, paymentDebit, receiptCredit, receiptDebit, contraCredit, contraDebit, journalCredit, journalDebit, callback) {
    Effect.find({ name: effectName || '' })
        .exec(function(err, effect) {
            if(err) { console.log(err); }
            else {
                Nature.find({ name: natureName || '' })
                        .exec(function(err2, nature) {
                            if(err2) { console.log(err2); }
                            else {
                                Group.find({ name: parentName || '' })
                                    .exec(function(err3, parent) {
                                        if(err3) { console.log(err3); }
                                        else {
                                            var group = new Group({
                                                name: groupName,
                                                alias: alias || undefined,
                                                parent: parent != null ? parent[0] : undefined,
                                                effect: effect != null ? effect[0] : undefined,
                                                nature: nature != null ? nature[0] : undefined,
                                                isSystemGroup: isSystemGroup || false,
                                                details: {
                                                    mailing: mailing || false,
                                                    contact: contact || false,
                                                    bank: bank || false,
                                                    tax: tax || false
                                                },
                                                voucher: {
                                                    payment: {
                                                        credit: paymentCredit || false,
                                                        debit: paymentDebit || false
                                                    },
                                                    receipt: {
                                                        credit: receiptCredit || false,
                                                        debit: receiptDebit || false
                                                    },
                                                    contra: {
                                                        credit: contraCredit || false,
                                                        debit: contraDebit || false
                                                    },
                                                    journal: {
                                                        credit: journalCredit || false,
                                                        debit: journalDebit || false
                                                    }
                                                }
                                            });
                                            group.save(function(err4, result){
                                                if(err4) {console.log(err4);}
                                                else { callback(); }
                                            });
                                        }
                                    });
                            }
                        });
            }
        });
}

let groups = [
    ['Branch/Divisions', null, null, null, null, true, true, true, false, true, false, true, true, false, false, false, true, true],//p
    ['Capital Account', null, null, 'Balance Sheet', 'Assets', true, true, true, false, true, false, true, true, false, false, false, true, true],//p
    ['Current Assets', null, null, 'Balance Sheet', 'Assets', true, false, false, false, false, false, true, true, false, false, false, true, true],//p
    ['Current Liabilities', null, null, 'Balance Sheet', 'Liabilities', true, false, false, false, false, false, true, true, false, false, false, true, true],//p
    ['Direct Expenses', null, null, 'Trading Account', 'Expenses', true, false, false, false, false, false, true, true, false, false, false, true, true],//p
    ['Direct Incomes', null, null, 'Trading Account', 'Incomes', true, false, false, false, false, false, true, true, false, false, false, true, true],//p
    ['Fixed Assets', null, null, 'Balance Sheet', 'Assets', true, false, false, false, false, false, true, true, false, false, false, true, true],//p
    ['Indirect Expenses', null, null, 'Profit & Loss A/c', 'Expenses', true, false, false, false, false, false, true, true, false, false, false, true, true],//p
    ['Indirect Incomes', null, null, 'Profit & Loss A/c', 'Incomes', true, false, false, false, false, false, true, true, false, false, false, true, true],//p
    ['Investments', null, null, 'Balance Sheet', 'Assets', true, false, false, false, false, false, true, true, false, false, false, true, true],//p
    ['Loans (Liability)', null, null, 'Balance Sheet', 'Liabilities', true, true, true, false, true, false, true, true, false, false, false, true, true],//p
    ['Misc. Expenses (Asset)', null, null, 'Balance Sheet', 'Assets', true, false, false, false, false, false, true, true, false, false, false, true, true],//p
    ['Purchase Accounts', null, null, 'Trading Account', 'Expenses', true, false, false, false, false, false, true, true, false, false, false, true, true],//p
    ['Sales Accounts', null, null, 'Trading Account', 'Incomes', true, false, false, false, false, false, true, true, false, false, false, true, true],//p
    ['Suspense Account', null, null, 'Balance Sheet', 'Liabilities', true, false, false, false, false, false, true, true, false, false, false, true, true],//p
    ['Bank Accounts', null, 'Current Assets', 'Balance Sheet', 'Assets', true, true, true, true, false, true, false, false, true, true, true, false, false],//p
    ['Bank OD A/c', 'Bank OCC A/c', 'Loans (Liability)', 'Balance Sheet', 'Liabilities', true, true, true, true, false, true, false, false, true, true, true, false, false],//p
    ['Cash-in-Hand', null, 'Current Assets', 'Balance Sheet', 'Assets', true, false, false, false, false, true, false, false, true, true, true, false, false],//p
    ['Deposits (Asset)', null, 'Current Assets', 'Balance Sheet', 'Assets', true, true, true, false, true, false, true, true, false, false, false, true, true],//p
    ['Duties & Taxes', null, 'Current Liabilities', 'Balance Sheet', 'Liabilities', true, false, false, false, false, false, true, true, false, false, false, true, true],//p
    ['Loans & Advances (Asset)', null, 'Current Assets', 'Balance Sheet', 'Assets', true, true, true, false, true, false, true, true, false, false, false, true, true],//p
    ['Provisions', null, 'Current Liabilities', 'Balance Sheet', 'Liabilities', true, false, false, false, false, false, true, true, false, false, false, true, true],//p
    ['Reserves & Surplus', 'Retained Earnings', 'Capital Account', 'Balance Sheet', 'Assets', true, true, true, false, true, false, true, true, false, false, false, true, true],//p
    ['Secured Loans', null, 'Loans (Liability)', 'Balance Sheet', 'Liabilities', true, true, true, false, true, false, true, true, false, false, false, true, true],//p
    ['Stock-in-Hand', null, 'Current Assets', 'Balance Sheet', 'Assets', true, false, false, false, false, false, false, false, false, false, false, false, false],//p
    ['Sundry Creditors', null, 'Current Liabilities', 'Balance Sheet', 'Liabilities', true, true, true, false, true, false, true, true, false, false, false, true, true],//p
    ['Sundry Debtors', null, 'Current Assets', 'Balance Sheet', 'Assets', true, true, true, false, true, false, true, true, false, false, false, true, true],//p
    ['Unsecured Loans', null, 'Loans (Liability)', 'Balance Sheet', 'Liabilities', true, true, true, false, true, false, true, true, false, false, false, true, true]//p
];

let callback = function(e,r) { 
    console.log('Groups Saved');
    mongoose.disconnect(); 
};

// groups[ groups.length-1 ].push(callback);
for (let i = groups.length-1; i>= 0; i--) {
  let group = groups[i];
  group.push( callback );
  callback = function(e,r) { seedGroups.apply(this, group); }
}

callback();