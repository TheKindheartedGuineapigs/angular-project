
_____
- ## Pages
	- ### Home page
		- Some random "Welcome to our site stuff"
		- Search bar with categories to enable products search
		- Displaying the last 10 advertisements posted/displaying the advertisements with publishers of highest rating
	- ### Products listing page (after a search, etc..)
		- List of `Advertisements`
			- Each list item contains photo, name, price, and location
			- Each list item has "View details" button
		- Options for filtering 
			- By name, date, price, city, etc.
		- items based on publisher rating of that category can be on top of the list
		- Content is paged/chunked
	- ### Product details page
		- Contains detailed product description
			- photo
			- title
			- price
			- category
			- description
			- location
			- publisher details
		- (?) "Send message DM to publisher" button
		- Redirects to a page where the `Buyer` and `Seller` "negotiate" terms
		- If the logged user == `Advertisement.owner` has "Edit advertisement button"
	- ### Product messages page (Seller asking the buyer about terms, additional details)
		- Accessed via the "Send message about this advertisement" button in the Product details page
		- `Seller` is able to send a message about the given `Advertisement`
		- Messages will be stored in DB and will be reloaded upon another visit on the same page
		- Probably needs further discussion as to how to be implemented
	- ### User`s profile (drop-down menu from the profile pic on navigation bar)
		- Separated pages
			- Edit profile info
			- Messages
			- Advertisements
			- Add new advertisement (it could also be a static button on page corner)
	- ### New advertisement page
		- Details
			- Photos
			- Name
			- Category
			- Price
			- Description
			- Tags(eventually if (enough time === true) ;) )
	- ### User`s profile page (public profile pages)
		- Profile info
			-  Location, name, profilePhoto, location, rating
			- User\`s published `Advertisements`
	- ### Login/Register/About pages
