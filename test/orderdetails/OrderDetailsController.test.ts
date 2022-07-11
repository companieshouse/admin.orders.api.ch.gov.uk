import {OrderDetailsController} from "../../src/orderdetails/OrderDetailsController";
import {jest} from "@jest/globals";
import {ViewModel} from "../../src/core/ViewModel";
import {BACK_LINK_TOGGLER} from "../../src/config/BackLinkToggler";
import { OrderDetailsParameters } from "../../src/orderdetails/OrderDetailsParameters";
import { CertificateDetails, OrderDetails } from "../../src/orderdetails/OrderDetails";
import { OrderDetailsResults } from "../../src/orderdetails/OrderDetailsResults";
import { Status } from "../../src/core/Status";

describe("OrderDetailsController", () => {

    it("Handles get order details requests", async () => {
        // given
        const service: any = {};
        const expectedCertificateDetailsResults = 
        {
            certificateDetails : {
                orderNumber: "ORD-123123-123123"
            } as CertificateDetails
        } as OrderDetails;
        const expectedResults = new OrderDetailsResults(Status.SUCCESS, expectedCertificateDetailsResults);
        service.fetchOrder = jest.fn(async () => {
            return expectedResults;
        });

        const pageFactory: any = {};
        const expectedViewModel = new ViewModel("template1", [{
            template: "template2"
        } as ViewModel]);
        BACK_LINK_TOGGLER.searchPageBackLinkEnabled = true;

        pageFactory.buildOrderDetailsPage = jest.fn((): ViewModel => {
            return expectedViewModel;
        });

        const request: any = {
            params: {
                orderId: "ORD-123123-123123"
            },
            orderAdminSession: {
                getAccessToken: jest.fn(() => {
                    return "F00DFACE";
                })
            }
        };

        const response: any = {};
        response.render = jest.fn();
        const expectedOrderDetailsParameters = new OrderDetailsParameters("ORD-123123-123123", "F00DFACE");
        const controller = new OrderDetailsController(service, pageFactory);
        const nextFunction = jest.fn();

        // when
        await controller.handleGet(request, response, nextFunction);

        // then
        expect(request.orderAdminSession.getAccessToken).toHaveBeenCalled();
        expect(service.fetchOrder).toHaveBeenCalledWith(expectedOrderDetailsParameters);
        expect(pageFactory.buildOrderDetailsPage).toHaveBeenCalledWith(expectedResults);
        expect(response.render).toHaveBeenCalledWith("template1", {
            control: expectedViewModel,
            renderBackButton: true
        });
        expect(nextFunction).toHaveBeenCalledTimes(0);
    });

    it("Renders service unavailable if server error status returned by service", async () => {
        // given
        const service: any = {};
        const expectedViewModel = new ViewModel("template1", []);
        const pageFactory: any = {};

        pageFactory.buildServiceUnavailable = jest.fn((): ViewModel => {
            return expectedViewModel;
        });

        service.fetchOrder = jest.fn(async () => {
            return {
                status: Status.SERVER_ERROR
            };
        });

        const request: any = {
            params: {
                orderId: "ORD-123123-123123"
            },
            orderAdminSession: {
                getAccessToken: jest.fn(() => {
                    return "F00DFACE";
                })
            }
        };

        const response: any = {};
        response.render = jest.fn();
        const expectedOrderDetailsParameters = new OrderDetailsParameters("ORD-123123-123123", "F00DFACE");
        const controller = new OrderDetailsController(service, pageFactory);
        const nextFunction = jest.fn();

        // when
        await controller.handleGet(request, response, nextFunction);

        // then
        expect(request.orderAdminSession.getAccessToken).toHaveBeenCalled();
        expect(service.fetchOrder).toHaveBeenCalledWith(expectedOrderDetailsParameters);
        expect(pageFactory.buildServiceUnavailable).toHaveBeenCalled();
        expect(response.render).toHaveBeenCalledWith("template1", {
            control: expectedViewModel,
        });
        expect(nextFunction).toHaveBeenCalledTimes(0);
    });

    it("Renders not found if client error status returned by service", async () => {
        // given
        const service: any = {};
        const expectedViewModel = new ViewModel("template1", []);
        const pageFactory: any = {};

        pageFactory.buildNotFound = jest.fn((): ViewModel => {
            return expectedViewModel;
        });

        service.fetchOrder = jest.fn(async () => {
            return {
                status: Status.CLIENT_ERROR
            };
        });

        const request: any = {
            params: {
                orderId: "ORD-123123-123123"
            },
            orderAdminSession: {
                getAccessToken: jest.fn(() => {
                    return "F00DFACE";
                })
            }
        };

        const response: any = {};
        response.render = jest.fn();
        const expectedOrderDetailsParameters = new OrderDetailsParameters("ORD-123123-123123", "F00DFACE");
        const controller = new OrderDetailsController(service, pageFactory);
        const nextFunction = jest.fn();

        // when
        await controller.handleGet(request, response, nextFunction);

        // then
        expect(request.orderAdminSession.getAccessToken).toHaveBeenCalled();
        expect(service.fetchOrder).toHaveBeenCalledWith(expectedOrderDetailsParameters);
        expect(pageFactory.buildNotFound).toHaveBeenCalled();
        expect(response.render).toHaveBeenCalledWith("template1", {
            control: expectedViewModel,
        });
        expect(nextFunction).toHaveBeenCalledTimes(0);
    });
})
