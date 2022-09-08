import { OrderItemMapper } from "./OrderItemMapper";
import { ItemOptions as MissingImageDeliveryItemOptions } from "@companieshouse/api-sdk-node/dist/services/order/mid";
import { MapperRequest } from "../mappers/MapperRequest";
import {MissingImageItemSummaryPage} from "./MissingImageItemSummaryPage";
import {MissingImageDeliverySummary} from "./MissingImageDeliverySummary";
import {MissingImageDeliveryDetailsComponent} from "./MissingImageDeliveryDetailsComponent";
import {ViewModel} from "../core/ViewModel";
import { mapFilingHistory, mapFilingHistoryDate } from "../mappers/FilingHistoryMapper";

export class MissingImageDeliveryMapper implements OrderItemMapper {
    private readonly data: MissingImageDeliverySummary;

    constructor (private mapperRequest: MapperRequest) {
        this.data = new MissingImageDeliverySummary();
    }

    map (): void {
        this.data.orderId = this.mapperRequest.orderId;
        this.data.itemId = this.mapperRequest.item.id;
        this.mapItemDetails();
        this.data.backLinkUrl = "javascript:history.back()";
    }

    getMappedOrder (): ViewModel {
        const result = new MissingImageItemSummaryPage(`Summary of item ${this.data.itemId} in order ${this.data.orderId}`);
        result.add(new MissingImageDeliveryDetailsComponent(this.data));
        return result.render();
    }

    private mapItemDetails (): void {
        const itemOptions = this.mapperRequest.item.itemOptions as MissingImageDeliveryItemOptions;
        this.data.companyName = this.mapperRequest.item.companyName;
        this.data.companyNumber = this.mapperRequest.item.companyNumber;
        this.data.date = mapFilingHistoryDate(itemOptions.filingHistoryDate);
        this.data.type = itemOptions.filingHistoryType;
        this.data.description = mapFilingHistory(itemOptions.filingHistoryDescription, itemOptions.filingHistoryDescriptionValues);
        this.data.fee = `£${this.mapperRequest.item.totalItemCost}`;
    }
}
