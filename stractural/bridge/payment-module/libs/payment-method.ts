import {Invoice} from "./invoice";
import {PaymentHandler} from "./payment-handler";

export abstract class PaymentMethod {
    constructor(
        public paymentHandler : PaymentHandler
    ) {}
    abstract startPay(invoice : Invoice);
}
