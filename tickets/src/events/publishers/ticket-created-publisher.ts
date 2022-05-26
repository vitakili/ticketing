import { Publisher, Subjects, TicketCreatedEvent } from "@vitatickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}