import { Item } from "@companieshouse/api-sdk-node/dist/services/order/order/types";
import {CertificateItemSummaryView} from "../../src/orderitemsummary/CertificateItemSummaryView";
import {ItemOptions} from "@companieshouse/api-sdk-node/dist/services/order/certificates";
import {ViewModel} from "../../dist/core/ViewModel";

export const ORDER_ID = "ORD-123456-123456";
export const CERTIFICATE_ID = "CRT-123456-123456";

export const mockMissingImageDeliveryItem: Item = {
    id: "MID-123456-123456",
    companyName: "The Company",
    companyNumber: "00000000",
    description: "missing image delivery for company 00000000",
    descriptionIdentifier: "missing-image-delivery",
    descriptionValues: {
        company_number: "00000000",
        "missing-image-delivery": "missing image delivery for company 00000000"
    },
    itemCosts: [
        {
            discountApplied: "0",
            itemCost: "3",
            calculatedCost: "3",
            productType: "missing-image-delivery"
        }
    ],
    itemOptions: {
        filingHistoryBarcode: "barcode",
        filingHistoryCategory: "category",
        filingHistoryCost: "cost",
        filingHistoryDate: "2015-05-26",
        filingHistoryDescription: "appoint-person-director-company-with-name",
        filingHistoryDescriptionValues: {
            officer_name: "Mr Richard John Harris"
        },
        filingHistoryId: "MzEyMzcyNDc2OWFkaXF6a2N4",
        filingHistoryType: "AP01"
    },
    etag: "7ae7d006fab4a6bab9fafcfea1eef1b78ffa4e52",
    kind: "item#missing-image-delivery",
    links: {
        self: "/orderable/missing-image-deliveries/MID-123456-123456"
    },
    quantity: 1,
    itemUri: "/orderable/missing-image-deliveries/MID-123456-123456",
    status: "unknown",
    postageCost: "0",
    totalItemCost: "3",
    postalDelivery: false
};

export const mockMidOrderItemView: ViewModel = {
    controls: [{
        controls: [],
        data: {
            orderId: "ORD-123456-123456",
            itemId: "MID-123456-123456",
            companyName: "The Company",
            companyNumber: "00000000",
            date: "26 May 2015",
            type: "AP01",
            description: "Appointment of Mr Richard John Harris as a director",
            fee: "£3",
            backLinkUrl: "javascript:history.back()"
        },
        template: "orderItemSummary/order_item_summary_mid.njk"
    }],
    data: {
        title: "Summary of item MID-123456-123456 in order ORD-123456-123456"
    },
    template: "page"
};

export const mockCertificateItem: Item = {
    id: CERTIFICATE_ID,
    companyName: "Company Name",
    companyNumber: "00000000",
    description: "certificate for company 00000000",
    descriptionIdentifier: "certificate",
    descriptionValues: {
        certificate: "certificate for company 00000000",
        companyNumber: "00000000"
    },
    itemCosts: [{
        discountApplied: "0",
        itemCost: "15",
        calculatedCost: "15",
        productType: "certificate"
    }],
    itemOptions: {
        certificateType: "incorporation-with-all-name-changes",
        deliveryMethod: "postal",
        deliveryTimescale: "standard",
        directorDetails: {
            includeBasicInformation: true
        },
        forename: "forename",
        includeGoodStandingInformation: true,
        registeredOfficeAddressDetails: {
            includeAddressRecordsType: "current-and-previous"
        },
        secretaryDetails: {
            includeBasicInformation: true
        },
        surname: "surname",
        companyType: "ltd"
    } as ItemOptions,
    etag: "abcdefg123456",
    kind: "item#certificate",
    links: {
        self: "/orderable/certificates/" + CERTIFICATE_ID
    },
    postalDelivery: true,
    quantity: 1,
    itemUri: "/orderable/certificates/" + CERTIFICATE_ID,
    status: "unknown",
    postageCost: "0",
    totalItemCost: "15",
    customerReference: "mycert",
    satisfiedAt: "2020-05-15T08:41:05.798Z"
};

export const mockDissolvedCertificateItem: Item = {
    id: CERTIFICATE_ID,
    companyName: "Company Name",
    companyNumber: "00000000",
    description: "certificate for company 00000000",
    descriptionIdentifier: "certificate",
    descriptionValues: {
        certificate: "certificate for company 00000000",
        companyNumber: "00000000"
    },
    itemCosts: [{
        discountApplied: "0",
        itemCost: "15",
        calculatedCost: "15",
        productType: "certificate"
    }],
    itemOptions: {
        certificateType: "dissolution",
        deliveryMethod: "postal",
        deliveryTimescale: "standard",
        includeEmailCopy: false,
        directorDetails: {},
        forename: "forename",
        registeredOfficeAddressDetails: {},
        secretaryDetails: {},
        surname: "surname"
    } as ItemOptions,
    etag: "abcdefg123456",
    kind: "item#certificate",
    links: {
        self: "/orderable/certificates/" + CERTIFICATE_ID
    },
    postalDelivery: true,
    quantity: 1,
    itemUri: "/orderable/certificates/" + CERTIFICATE_ID,
    status: "unknown",
    postageCost: "0",
    totalItemCost: "15",
    customerReference: "mycert",
    satisfiedAt: "2020-05-15T08:41:05.798Z"
};

export const mockActiveLtdCertificateItemView: ViewModel = {
    controls: [{
        controls: [],
        data: {
            orderId: ORDER_ID,
            itemId: CERTIFICATE_ID,
            itemDetails: [
                {
                    key: "Company name",
                    value: "Company Name"
                },
                {
                    key: "Company number",
                    value: "00000000"
                },
                {
                    key: "Certificate type",
                    value: "Incorporation with all company name changes"
                },
                {
                    key: "Statement of good standing",
                    value: "Yes"
                },
                {
                    key: "Registered office address",
                    value: "Current address and the one previous"
                },
                {
                    key: "The names of all current company directors",
                    value: "Yes"
                },
                {
                    key: "The names of all current secretaries",
                    value: "Yes"
                },
                {
                    key: "Company objects",
                    value: "No"
                },
                {
                    key: "Delivery method",
                    value: "Standard delivery (aim to dispatch within 10 working days)"
                },
                {
                    key: "Email copy required",
                    value: "Email only available for express delivery method"
                },
                {
                    key: "Fee",
                    value: "£15"
                }
            ],
            backLinkUrl: "javascript:history.back()"
        },
        template: "orderItemSummary/order_item_summary_certificate.njk"
    }],
    data: {
        title: "Summary of item CRT-123456-123456 in order ORD-123456-123456"
    },
    template: "page"
};

export const mockAdministratedLtdCertificateItemView: ViewModel = {
    controls: [{
        controls: [],
        data: {
            orderId: ORDER_ID,
            itemId: CERTIFICATE_ID,
                itemDetails: [
                    {
                        key: "Company name",
                        value: "Company Name"
                    },
                    {
                        key: "Company number",
                        value: "00000000"
                    },
                    {
                        key: "Certificate type",
                        value: "Incorporation with all company name changes"
                    },
                    {
                        key: "Registered office address",
                        value: "Current address and the one previous"
                    },
                    {
                        key: "The names of all current company directors",
                        value:  "Yes"
                    },
                    {
                        key: "The names of all current secretaries",
                        value: "Yes"
                    },
                    {
                        key: "Company objects",
                        value: "No"
                    },
                    {
                        key: "Administrators' details",
                        value: "No"
                    },
                    {
                        key: "Delivery method",
                        value: "Standard delivery (aim to dispatch within 10 working days)"
                    },
                    {
                        key: "Email copy required",
                        value: "Email only available for express delivery method"
                    },
                    {
                        key: "Fee",
                        value: "£15"
                    }
                ],
            backLinkUrl: "javascript:history.back()"
        },
        template: "orderItemSummary/order_item_summary_certificate.njk"
    }],
    data: {
        title: "Summary of item CRT-123456-123456 in order ORD-123456-123456"
    },
    template: "page"
};

export const mockLiquidatedLtdCertificateItemView: ViewModel = {
    controls: [{
        controls: [],
        data: {
            orderId: ORDER_ID,
            itemId: CERTIFICATE_ID,
            itemDetails: [
                {
                    key: "Company name",
                    value: "Company Name"
                },
                {
                    key: "Company number",
                    value: "00000000"
                },
                {
                    key: "Certificate type",
                    value: "Incorporation with all company name changes"
                },
                {
                    key: "Registered office address",
                    value: "Current address and the one previous"
                },
                {
                    key: "The names of all current company directors",
                    value:  "Yes"
                },
                {
                    key: "The names of all current secretaries",
                    value: "Yes"
                },
                {
                    key: "Company objects",
                    value: "No"
                },
                {
                    key: "Liquidators' details",
                    value: "Yes"
                },
                {
                    key: "Delivery method",
                    value: "Standard delivery (aim to dispatch within 10 working days)"
                },
                {
                    key: "Email copy required",
                    value: "Email only available for express delivery method"
                },
                {
                    key: "Fee",
                    value: "£15"
                }
            ],
            backLinkUrl: "javascript:history.back()"
        },
        template: "orderItemSummary/order_item_summary_certificate.njk"
    }],
    data: {
        title: "Summary of item CRT-123456-123456 in order ORD-123456-123456"
    },
    template: "page"
};

export const mockDissolvedLtdCertificateItemView: ViewModel = {
    controls: [{
        controls: [],
        data: {
            orderId: ORDER_ID,
            itemId: CERTIFICATE_ID,
            itemDetails:  [
                {
                    key: "Company name",
                    value: "Company Name"
                },
                {
                    key: "Company number",
                    value: "00000000"
                },
                {
                    key: "Certificate type",
                    value: "Dissolution with all company name changes"
                },
                {
                    key: "Delivery method",
                    value: "Standard delivery (aim to dispatch within 10 working days)"
                },
                {
                    key: "Email copy required",
                    value: "Email only available for express delivery method"
                },
                {
                    key: "Fee",
                    value: "£15"
                }
            ],
            backLinkUrl: "javascript:history.back()"
        },
        template: "orderItemSummary/order_item_summary_certificate.njk"
    }],
    data: {
        title: "Summary of item CRT-123456-123456 in order ORD-123456-123456"
    },
    template: "page"
};
