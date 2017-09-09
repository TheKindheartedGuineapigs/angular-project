export class UserProfile {
    private username: string;
    private firstName: string;
    private lastName: string;
    private phoneNumber: string;
    private photoUrl: string;
    private addressOne: string;
    private addressTwo: string;
    private city: string;
    private country: string;

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

    set AddressOne (value: string) {
        this.addressOne = value;
    }

    set AddressTwo (value: string) {
        this.addressTwo = value;
    }

    set Country (value: string) {
        this.country = value;
    }

    set City (value: string) {
        this.city = value;
    }

    set Username (value: string) {
        this.username = value;
    }

    set FirstName (value: string) {
        this.firstName = value;
    }

    set LastName (value: string) {
        this.lastName = value;
    }

    set PhoneNumber (value: string) {
        this.phoneNumber = value;
    }

    set PhotoUrl (value: string) {
        this.photoUrl = value;
    }

    get AddressOne () {
        return this.addressOne;
    }

    get AddressTwo () {
        return this.addressTwo;
    }

    get Country () {
        return this.country;
    }

    get City () {
        return this.city;
    }

    get Username () {
        return this.username;
    }

    get FirstName () {
        return this.firstName;
    }

    get LastName () {
        return this.lastName;
    }

    get PhoneNumber () {
        return this.phoneNumber;
    }

    get PhotoUrl () {
        return this.photoUrl;
    }

    setAllFields(value: string) {
        this.addressOne = value;
        this.addressTwo = value;
        this.city = value;
        this.country = value;
        this.username = value;
        this.firstName = value;
        this.lastName = value;
        this.phoneNumber = value;
        this.photoUrl = value;
    }
}
