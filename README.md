# Audiophile E-commerce Store 🎧

A full-featured, server-rendered e-commerce application for high-quality audio products. Built with a modern tech stack including Next.js, TypeScript, and Convex, this project demonstrates a complete user journey from browsing products to receiving an order confirmation email.

## Features

-   **Product Catalog**: Browse products across multiple categories like headphones, speakers, and earphones.
-   **Detailed Product Views**: Each product has a dedicated page with a photo gallery, detailed features, items included in the box, and suggestions for similar products.
-   **Dynamic Shopping Cart**: Users can add products to their cart, adjust quantities, and view a real-time summary of their selections.
-   **Multi-Step Checkout**: A comprehensive checkout process with client-side validation using Zod and React Hook Form.
-   **Order Confirmation**: Upon successful checkout, an order is saved to the database, and the user receives a confirmation email.
-   **State Management**: Centralized state management for the cart and UI elements is handled efficiently with Redux Toolkit.
-   **Responsive Design**: A fully responsive interface crafted with Tailwind CSS, ensuring a seamless experience on all devices.

## Technologies Used

| Technology | Description |
| :--- | :--- |
| **[Next.js](https://nextjs.org/)** | React framework for server-side rendering and static site generation. |
| **[TypeScript](https://www.typescriptlang.org/)** | Statically typed superset of JavaScript for robust and maintainable code. |
| **[Convex](https://www.convex.dev/)** | A modern backend-as-a-service platform for managing the database and server functions. |
| **[Redux Toolkit](https://redux-toolkit.js.org/)** | The official, opinionated toolset for efficient Redux development. |
| **[Tailwind CSS](https://tailwindcss.com/)** | A utility-first CSS framework for rapid UI development. |
| **[React Hook Form](https://react-hook-form.com/)** | Performant, flexible, and extensible forms with easy-to-use validation. |
| **[Zod](https://zod.dev/)** | TypeScript-first schema declaration and validation library. |
| **[Nodemailer](https://nodemailer.com/)** | Module for Node.js applications to allow easy email sending. |

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Redot2468/hng13-frontend-stage3-react.git
    cd hng13-stage3-frontend-react
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**:
    Create a `.env.local` file in the root of the project and add the following variables.

    ```env
    # Convex Configuration
    CONVEX_DEPLOYMENT=dev:your-deployment-name
    NEXT_PUBLIC_CONVEX_URL=https://your-project.convex.cloud

    # Email Service (Nodemailer with Gmail SMTP)
    EMAIL_HOST=smtp.gmail.com
    EMAIL_PORT=587
    EMAIL_SECURE=false
    EMAIL_USER="your-email@gmail.com"
    EMAIL_PASSWORD="your-gmail-app-password"
    EMAIL_FROM="Your Store Name <your-email@gmail.com>"
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

## Usage

Once the application is running, you can explore its features:

1.  **Browse Products**: Navigate to different categories using the main navigation (Headphones, Speakers, Earphones).
2.  **View a Product**: Click on any "See Product" button to go to the product's detail page. Here you can see more images, read about its features, and see what's included.
3.  **Add to Cart**: On a product page, click the "Add to Cart" button. You can open the cart modal by clicking the cart icon in the navigation bar.
4.  **Manage Cart**: Inside the cart, you can increase or decrease the quantity of each item or remove all items at once.
5.  **Checkout**: Click the "Checkout" button to proceed to the payment page.
6.  **Complete Order**: Fill in the required shipping and payment details. The form has built-in validation to guide you. Click "Continue & Pay" to finalize the order.
7.  **Order Confirmation**: After a successful order, a confirmation modal will appear, and you will receive a confirmation email with your order details.

## License

This project is licensed under the MIT License.

## Author

**Ridwan Lawal**

-   **LinkedIn**: [your-linkedin-username](https://linkedin.com/in/your-linkedin-username)
-   **Twitter**: [@your-twitter-handle](https://twitter.com/your-twitter-handle)

---

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Convex](https://img.shields.io/badge/Convex-000000?style=for-the-badge&logo=convex&logoColor=white)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)