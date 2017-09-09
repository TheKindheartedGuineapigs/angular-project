export class UserProfile {
    public username: string;
    public firstName: string;
    public lastName: string;
    public phoneNumber: string;
    public photoUrl: string;
    public addressOne: string;
    public addressTwo: string;
    public city: string;
    public country: string;

    constructor() {
        this.addressOne = 'Loading ...';
        this.addressTwo = 'Loading ...';
        this.city = 'Loading ...';
        this.country = 'Loading ...';
        this.username = 'Loading ...';
        this.firstName = 'Loading ...';
        this.lastName = 'Loading ...';
        this.phoneNumber = 'Loading ...';
        this.photoUrl = 'Loading ...';
    }
}
