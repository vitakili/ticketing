import { Publisher, Subjects, TicketUpdatedEvent } from "@vitatickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    readonly subject = Subjects.TicketUpdated;
}