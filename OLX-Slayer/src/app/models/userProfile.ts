export class UserProfile {
    public username: string;
    public firstName: string;
    public lastName: string;
    public phoneNumber: string;
    public addressOne: string;
    public addressTwo: string;
    public city: string;
    public country: string;

    constructor() {
        this.addressOne = '';
        this.addressTwo = '';
        this.city = '';
        this.country = '';
        this.username = '';
        this.firstName = '';
        this.lastName = '';
        this.phoneNumber = '';
    }
}
