import {EventService} from '../../../src/dependencyinversion/eventService'
import {Event} from '../../../src/dependencyinversion/event'
import { SimpleEventDao } from '../../../src/dependencyinversion/simpleEventDao';

describe('event service', () => {
    let tested: EventService;
    let event1: Event;
    let event2: Event;

    beforeEach(() => {
        event1 = new Event("concert");
        event2 = new Event("yarn festival");

        let events: Map<number, Event> = new Map([
            [1, event1],
            [2, event2]
        ]);
        let simpleEventDao = new SimpleEventDao(events);
        tested = new EventService(simpleEventDao);
    });

    it('should find present event by id', () => {
        let actualEvent: Event | undefined = tested.findById(1);
        expect(actualEvent).toEqual(event1)
    });

    it('should find all present events', () => {
        let actualEvents: Event[] = tested.findAll();
        expect(actualEvents).toEqual([event1, event2]);
    })
});