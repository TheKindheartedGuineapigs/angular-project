export class Advertisement {
    private heading: string;
    private category: string;
    private description: string;
    private images: [string];
    private createdBy: string;
    private city: string;
    private address: string;
    private phoneNumber: string;
    private username: string;

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

    get _heading(): string {
        return this.heading;
    }

<<<<<<< HEAD
    get _images(): [string] {
        return this.images;
    }

=======
>>>>>>> feature/advertisements
}
