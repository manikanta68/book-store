# Title

    Interactive book store application

## Objective

    Build an application that allows users to browse and search for books, view book details, add books to a shopping cart,and place an order.

## Tech Stack

    Frontend - ReactJS(React Router,Redux/React Context API,CSS,Git,and GitHub for hosting the repository.)

## Completion Instructions

### Functionality

#### Must Have

* Build a ReactJS application with multiple pages/components,including Home,Book Listing,Book Details,Shopping Cart,and Checkout pages.

* Implement features such as book search,book filtering,adding to cart,removing from cart,and order placement.

#### Pages

<table> 

<tr>
<th>Page</th><th>Page Details</th><th>Navigation</th>
</tr>

<tr>
<td>Home</td> 
<td>Header - links for pages Home, Book List,Cart <br>Banner - Heading, description, and"Explore Books" Button</td> 
<td></td>
</tr>

<tr>
<td>Book List</td>
<td> Header - links for pages Home, Book List, Cart, Book Items (title,subtitle,image,price), Search(by title, author), Filter(by price)</td>
<td>"Book List" link in Header,<br>"Explore Books" Button, <br>"Back" Button in Book Details Page</td>
</tr>

<tr>
<td>Book Details</td>
<td>Book detailed Info(title,subtitle,image,description,pirce) <br> "Add to card" Button <br> "Back" button</td>
<td> Each book in the book list page </td>
</tr>

<tr>
<td>Cart</td>
<td>Cart Items (title,subtitle,image,price), "Romove" Button, Checkout Button, Order Summary,</td>
<td>"Cart" link in Header, <br> "Back" Button in Checkout Page</td>
</tr>

<tr>
<td>Checkout</td>
<td>Back button, Order form (Personal details, Summary, Place Order button)</td>
<td>Checkout in Cart</td>
</tr>

</table>





    




#### Nice to Have

    Bonus tasks include implementing user authentication,unit tests,and deploying the application on a hosting platform.

### Guidelines to develop a project

#### Must Have

- Utilize GitHub
  - Commit code regularly and commit messages should be clear
  - Include a README file explaining the project setup,usage instructions, and any additional information
  - The repo should be well organized and easy to understand.
  - The code should be clean, modular,and well-structured
- The application should be visually appealing.
- The application should handle all the errors.


#### Nice to Have

- Implement Unit Tests

### Submission Instructions

#### Must Have

- Github Repository

#### Nice to Have

- deploying the application on a hosting platform.

## Technical Details

### Routes 

| Page         | Route        | Path       |
| ------------ | ------------ | ---------- |
| Home         | Home         | /          |
| Book List    | Book List    | /books     |
| Book Details | Book Details | /books/:id | 
| Cart         | Cart         | /cart      |
| Checkout     | Checkout     | /checkout  | 
| Not Found    | Not Found    | /not-found | 

### Routes & Components 

**Home** 

| Component   | Deatils                                          | State              | API (IT Bookstore)  |
| ----------- | ------------------------                         | -------            | ------------------- | 
| Home        | Heading, Description, and "ExploreBooks" button  | -                  | -                   |
| Header      | Links for pages Home, Book List, Cart            | (Context Consumer) | -                   |

**Book List** 

| Component       | Details                                      | State                                  | API (IT Bookstore)    |
| --------------- | -------------------------------------------- | -------------------------------------  | --------------------- |
| BookList        |                                              |  apiStatus, booksData, priceRangeValue | /new                  |
| Header          | Links for pages Home, Book List, Cart        | (Context Consumer)                     | -                     | 
| SearchInput     | Search (by title,author), "Search" button    | SearchInpuValue                        | search/{query}        |
| PriceRange      | Filter (by price), "Apply Filter" button     | -                                      | -                     | 
| BookItem        | Book Items (title, subtitle, image, price)   | -                                      | -                     | 
| Loader          |                                              | -                                      | -                     |
| ErrorMessage    |                                              | -                                      | -                     | 

**Book Details** 

| Component       | Details                                                                                                           | State                   | API (IT Bookstore) |
| --------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------- | --------------- |
| BookDetails     | Book detailed Information - image, title, subtitle, price, description, etx., "Add to cart" Button, "Back" button | apiStatus,bookDetailsData  | /books/{isbn}         |
| Header          | Links for pages Home, Book List, Cart      | (Context Consumer)    | -                |            
| Loader          |                                            | -                     | -                |
| ErrorMeassage   |                                            | -                     | -                  |                                                                              

**Cart** 

| Components      | Details                                                        | State              | API (IT Bookstore) |
| --------------- | -------------------------------------------------------------- | ------------------ | ------------------ |
| Cart            | Cart Itmes, "Romove" Button, Order Summary, "Checkout" Button  | (Contex Consummer) | -                  |
| Header          | Links for pages Home, Book List, Cart                          | (Contex Consummer) | -                  |
| CartItem        | Book Detailed Info (image, title, subtitle, price, description)| (Context Consummer)| -                  |

**Checkout** 

| Components      | Details                                                              | State                              | API (IT Bookstore)  |
| -----------     | -------------------------------------------------------------------- | ---------------------------------- | ------------------- | 
| Checkout        | "Back" button                                                        | (Context Consumer), isOrderPlaced  | -                   |
| UserDetailsForm | Order Form - Personal Details - First Name, Last Name, Email, Mobile No., place Order Button, Order Summary         | name, address, phone, email, showValidationErrorMessage | -            |

**Not Found** 

| Components     | Details                               |  State                       | API (IT Bookstore)   |
| -------------- | ------------------------------------  | ---------------------------- | -------------------- |
| NotFound       | -                                     | -                            | -                    |
| Header         | Links for pages Home, Book List, Cart | (Context Consumer)           | -                    | 

**APP**

| Component     | Details      | State                                                                         | API (IT Bookstore)  |
| ------------- | ------------ | ----------------------------------------------------------------------------- | ------------------- |
| APP           | -            | cartList (Context Provider), Context: cartList, addToCart(),deleteFromCart(), resetCart() | -           |


## Resources

### Design files

    Home, Book Lists, Book Details, Shopping Cart, Checkout
    Reference: crossword.in
### APIs

    Books, Book Details, Search, Filter
    API reference: api.itbook.store

### Third-party packages

- Routes, etc (react-router-dom)
- Icons: react-icons 
- Loader: react-loader-spinner
- Range Slider: rc-slider
