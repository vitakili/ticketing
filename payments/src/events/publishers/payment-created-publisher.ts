import { Subjects, Publisher, PaymentCreatedEvent } from '@vitatickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated;
}