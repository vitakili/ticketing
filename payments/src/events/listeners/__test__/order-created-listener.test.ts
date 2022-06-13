import mongoose from 'mongoose';
import { OrderCreatedEvent, OrderStatus } from '@vitatickets/common';
import { natsWrapper } from '../../../nats-wrapper';
import { OrderCreatedListener } from '../order-create-listener';
import { Message } from 'node-nats-streaming';
import { Order } from '../../../models/order';

const setup = async () => {
    const listener = new OrderCreatedListener(natsWrapper.client);

    const data: OrderCreatedEvent['data'] = {
        id: new mongoose.Types.ObjectId().toHexString(),
        version: 0,
        expiresAt: 'fdsafasd',
        userId: 'dfasdfsd',
        status: OrderStatus.Created,
        ticket: {
            id: 'fafsdg',
            price: 10
        }
    };

    // @ts-ignore
    const msg: Message = {
        ack: jest.fn()
    };

    return { listener, data, msg };
};

test('replicates the order info', async () => {
    const { listener, data, msg} = await setup();

    await listener.onMessage(data, msg);

    const order = await Order.findById(data.id);

    expect(order!.price).toEqual(data.ticket.price);
})

test('acks the message', async () => {
    const { listener, data, msg} = await setup();

    await listener.onMessage(data, msg);

    expect(msg.ack).toHaveBeenCalled();
})