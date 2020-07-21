import {generateRandomFirstName, generateRandomLastName} from './types/names';
import generateRandomAge from './types/age';
import {generateRandomNumber, generateRandomDecimal, generateRandomPrice} from './types/number';
import generateRandomPhone from './types/phone';
import generateRandomCreditCardNumber from './types/creditcard';
import {generateRandomDate} from './types/date';
import { generateRandomId, generateRandomIndex, generateRandomUUID } from './types/id';

export default class TypeFactory{

    private id:number;

    constructor(){
        this.id = 0;
    }

    getDataValue(key:string, type:string):[string, any]{
        switch(type){
            case 'id':
                return [key, generateRandomId()];
            break;
            case 'index':
                const id = this.id;
                this.id++;
                return [key, generateRandomIndex(id)];
            break;
            case 'uuid':
                return [key, generateRandomUUID()];
            break;
            case 'number':
                return [key, generateRandomNumber()];
            break;
            case 'first-name':
                return [key, generateRandomFirstName()];
            break;
            case 'last-name':
                return [key, generateRandomLastName()];
            break;
            case 'age':
                return [key, generateRandomAge()];
            break;
            case 'phone':
                return [key, generateRandomPhone()];
            break;
            case 'decimal':
                return [key, generateRandomDecimal()];
            break;
            case 'price':
                return [key, generateRandomPrice()];
            break;
            case 'credit-card':
                return [key, generateRandomCreditCardNumber()];
            break;
            case 'date':
                return [key, generateRandomDate()];
            break;
            default:
                return ['',''];
        } 
    }
}