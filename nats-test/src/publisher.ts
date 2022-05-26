import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

console.clear();

const stan = nats.connect('ticketing', 'abc', {
    url: 'http://localhost:4222'
});

stan.on('connect', async () => {
    console.log('Publisher connected to NATS');

    try{
        const publisher = new TicketCreatedPublisher(stan);
        await publisher.publish({
            id: '15523',
            title: 'concert',
            price: 12
        });
    } catch(err) {
        console.log(err);
    }

    // const data = JSON.stringify({
    //     id: '1243',
    //     title: 'concert',
    //     price: 20
    // });

    // stan.publish('ticket:created', data, () => {
    //     console.log('Event published');
    // });
});