# README.md

## Description
This is a simple API for a bills management system. The API allows users to register, login, and logout. The API also allows users to create, view, and update bills. The API also allows users to create, view, update, and delete bill types. The API has two roles: admin and customer. Admins can create, view, and update bills and bill types. Customers can only view bills.

## Installation
To install this API, you need to have Node.js installed on your machine. You can download it [here](https://nodejs.org/en/). After installing Node.js, you can clone this repository by running the following command in your terminal:

```bash
git clone https://github.com/resarisyan/synrgy7-fsw1-resa-ch6-group
```

After cloning the repository, navigate to the project directory and run the following command to install the dependencies:

```bash
npm install
```

After installing the dependencies, you need to copy the `.env.example` file to `.env` and fill in the necessary environment variables.

```bash
cp .env.example .env
```

## Usage
To start the API, run the following command in your terminal:

```bash
npm start
```

The API will be running on `http://localhost:9000`.

## Endpoints
The following are the available endpoints:

### General
#### Auth
- POST `/api/v1/auth/register` - Register a new user
- POST `/api/v1/auth/login` - Login a user
- POST `/api/v1/auth/logout` - Logout a user

### Users Admin
#### Bills
- GET `/api/v1/admin/bills` - Get all bills
- POST `/api/v1/admin/bills` - Create a new bill
- GET `/api/v1/admin/bills/:id` - Get a bill by ID
- PUT `/api/v1/admin/bills/status/:id` - Update the status of a bill

#### Bill Types
- GET `/api/v1/admin/bill-types` - Get all bill types
- POST `/api/v1/admin/bill-types` - Create a new bill type
- GET `/api/v1/admin/bill-types/:id` - Get a bill type by ID
- PUT `/api/v1/admin/bill-types/:id` - Update a bill type by ID
- DELETE `/api/v1/admin/bill-types/:id` - Delete a bill type by ID

### Users Cusomer
#### Bills
- GET `/api/v1/customer/bills` - Get all bills

## License
This project is licensed under the MIT license. You can view the license [here](LICENSE).

## Contributing
If you would like to contribute to this project, please create a pull request. You can view the pull request template [here](PULL_REQUEST_TEMPLATE.md).

## Issues
If you encounter any issues with this project, please create an issue. You can view the issue template [here](ISSUE_TEMPLATE.md).

## Authors
- Resa Auliana Risyan - [GitHub]("https://github.com/resarisyan/")
- Muhlis Ahmad - [GitHub]("https://github.com/XisUndefined")

## Acknowledgements
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Knex.js](http://knexjs.org/)
- [JWT](https://jwt.io/)

## Additional Notes
This project is part of the Synrgy Academy Full Stack Web Development Bootcamp. This project is for educational purposes only.