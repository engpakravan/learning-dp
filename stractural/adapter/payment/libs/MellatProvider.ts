import {OnlineGatewayType} from "./OnlineGateway.type";
import {Invoice} from "./invoice";

export class MellatProvider implements OnlineGatewayType {
    _payment_title = "Mellat๐ง๐ผโ๐คโ๐ง๐ป"
    startPay(invoice: Invoice): void {
        window.open("https://Mellat.com" , "_blank")
    }

}
