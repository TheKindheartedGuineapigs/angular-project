export class UserProfile {
    public username: string;
    public firstName: string;
    public lastName: string;
    public phoneNumber: string;
    public addressOne: string;
    public addressTwo: string;
    public city: string;
    public country: string;

    constructor(addressOne, addressTwo, city, country, username, firstName, lastName, phoneNumber) {
        this.addressOne = addressOne;
        this.addressTwo = addressTwo;
        this.city = city;
        this.country = country;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
}
