import { Publisher, Subjects, OrderCancelledEvent } from "@vitatickets/common";


export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
};