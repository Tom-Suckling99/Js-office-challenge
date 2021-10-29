'use strict';

describe('Feature Test:', () => {
  let meetingroom;

  beforeEach(() => {
    meetingroom = new Meetingroom('the one on the left');
  });

  it('planes can be instructed to land at an airport', () => {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

});
