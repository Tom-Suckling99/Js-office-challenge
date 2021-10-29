class Office {
    constructor() {
        this._building = [];
    };

    meetingrooms(){
        return this._building;
    };

    addMeetingRoom(meetingroom){
        this._building.push(meetingroom);
    };
};