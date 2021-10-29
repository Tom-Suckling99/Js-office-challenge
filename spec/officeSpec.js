describe('Office', () => {
    let office;
    let meetingroom;
    beforeEach(() => {
      office = new Office();
      meetingroom = new Meetingroom('The one on the right')
    });
    it('has no rooms by default', () => {
        expect(office.meetingrooms()).toEqual([]);
      });
    it('can add a meeting room', () => {
        office.addMeetingRoom(meetingroom)
        expect(office.meetingrooms()).toEqual([meetingroom]);
    });
});