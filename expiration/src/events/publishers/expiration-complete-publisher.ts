import { Subjects, Publisher, ExpirationCompleteEvent } from "@vitatickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
    readonly subject = Subjects.ExpirationComplete;
}