This responsive web application is designed to deliver a smooth, secure, and user-friendly shopping experience. Key features include:

1. Product Discovery: Customers can browse and explore products easily using advanced search, filtering, and sorting functionalities to quickly find what they need.
2. Pagination: To enhance performance, the application implements pagination, limiting the number of products displayed per page, making it easier for users to navigate through large product catalogs.
3. Shopping Cart Management: Users can efficiently manage their cart by adding, removing, or adjusting product quantities and proceed to checkout smoothly.
4. Secure Payments via Stripe: Integrated with Stripe for highly secure payment processing, ensuring PCI compliance. Stripe handles the payment credentials, safeguarding customer transactions.
5. Authentication & Authorization:                                                                                                                      
     a) The application uses JSON Web Tokens (JWT) for secure authentication and authorization, with login sessions expiring after 2 days to enhance security.  
     b) Password Hashing: User passwords are securely hashed before being stored in the database, ensuring strong protection of sensitive information.  
     c) Password and Email Validation:                                                       
            1) Client-side Password Validation: The application enforces password strength by using validation patterns while creating a password. Users are prompted to meet specific criteria (e.g., length, special 
               characters, numbers) to ensure security.  
            2) Client-side Email Validation: The application also includes a pattern-based email validation feature during registration. Users are immediately notified if their email format is invalid, without 
               needing to make any API calls.  
6. Anonymous User Cart Handling: Cookies store cart information for anonymous users for up to 14 days. When the user logs in or registers, the cart data is transferred to their account, and the cookies are deleted, 
   ensuring a smooth transition.
7. User Accounts & Saved Addresses: Registered users can view their order history, manage their cart, and enjoy the convenience of having their shipping address saved for future purchases, making the checkout 
   process faster.
8. Dark Mode: The application offers a dark mode option to enhance visual comfort, especially in low-light environments.
9. Intuitive User Interface: Built using React, the application provides a fast, responsive user interface across all devices. Redux is used for efficient state management, ensuring smooth handling of user data 
   across components.
10. Optimized API Calls: By utilizing Redux for state management, the application optimizes API calls to the backend, reducing redundant requests and improving performance. Data is intelligently cached and reused, 
    minimizing load on the backend and providing a faster user experience.

==> Technologies and tools used: 
 * Frontend : React, Redux, Typescript
 * Backend : C#, ASP.NET
 * Database : PostgreSQL(Entity framework for relational database)
 * Payment Gateway : Stripe
 * Other tools/frameworks : .NET Identity framework, .NET Entity framework, redux-toolkit, material-ui, axios, JWT(JsonWebTokens)
   
