describe('Meetingroom', () => {
    let meetingroom;
    beforeEach(() => {
      meetingroom = new Meetingroom('The end one');
    });
    it('can be named', () => {
      expect(meetingroom._name).toEqual('The end one');
    });
  });