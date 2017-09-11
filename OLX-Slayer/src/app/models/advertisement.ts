export class Advertisement {
    public heading: string;
    public category: string;
    public description: string;
    public images: [string];
    public createdBy: string;
    public city: string;
    public address: string;
    public phoneNumber: string;
    public username: string;

    constructor(heading, category, description, images, createdBy, city, address, phoneNumber, username) {
        this.address = address;
        this.category = category;
        this.city = city;
        this.createdBy = createdBy;
        this.description = description;
        this.heading = heading;
        this.images = images;
        this.phoneNumber = phoneNumber;
        this.username = username;
    }

}
