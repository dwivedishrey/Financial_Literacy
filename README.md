
# ArthaMarga - Empowering Financial Literacy for All


**ArthaMARGA** is an interactive, user-friendly educational platform designed to enhance financial literacy and empower individuals to manage their finances wisely. The name "ArthaMARGA" combines "Artha" (wealth or prosperity) and "Marga" (path or way), signifying "The Way to Financial Prosperity."

## Key Features
1. **User Dashboard**: Built with React.js, the dashboard displays user information such as total balance, total investment, and total budget. Users can set budgets, track upcoming payment dates, and view interactive graphs and charts created with Chart.js.

2. **ARTHAGURU Chatbot**: An AI-powered chatbot that provides real-time assistance, addresses user queries, and connects them with financial advisors for immediate support.

3. **Profile Management**: Users can update their profile details, including name, email, credit, and PAN card details. This information is crucial for providing personalized financial assistance.

4. **Income and Expense Tracking**: Users can efficiently track and manage various income sources, record expenses, set budgets, and analyze spending patterns.

5. **Investment Monitoring**: Allows users to track investments in assets such as stocks and real estate, with tools to monitor performance, highlight upcoming payment dates, and visualize investment distribution.

6. **Educational Courses**: Offers courses on crucial financial topics like budgeting and savings. Basic courses are provided free of charge to empower women and bridge the financial literacy gap.

7. **Financial Calculators**: Includes EMI Calculator, Mortgage Calculator, and Investment Calculator to help users plan their finances effectively.

8. **Market Trends and Financial News**: A dedicated news section keeps users informed about the latest market trends and financial news.

9. **Gamification Elements**:
   - **Cash Crunch Quiz**: Interactive quizzes that reward users with free sessions with financial advisors.
   - **Financial Fun Zone**: Games related to finance to make learning enjoyable and accessible.
   - **Reward Store**: Users can earn coupons and vouchers by winning quizzes and completing courses.

10. **Community Engagement**:
    - **Advisor Hub**: Allows users to book sessions with financial advisors based on their ratings and expertise.
    - **Financial Quora**: A community discussion page where users can share insights, seek advice, and participate in discussions on various financial topics.



## API Reference

#### Get user UID

```http

 GET /api/getUserIdByUid/${uid}

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `uid` | `object` | **Required**. ID of the user  |

#### Post income details

```http

  POST /api/add-income

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `income`      | `string` | **Required**. Income data to add |
| `user_id`      | `string` | **Required**.  ID of the authenticated user |


### Get Incomes
```http

GET /api/get-income

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user_id` | `string` | **Required**. ID of the authenticated user  |

#### Post expense details

```http

  POST /api/add-expense

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `income`      | `string` | **Required**. Expense data to add |
| `user_id`      | `string` | **Required**.  ID of the authenticated user |


### Get Expenses
```http

GET /api/get-expense

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user_id` | `string` | **Required**. ID of the authenticated user  |




## Deployment Prerequisites
Before deploying this project, ensure you have the following installed:

#### Node.js (v14.x or later)
#### npm (v6.x or later)
#### Firebase CLI (for Firebase authentication)

## Firebase Hosting
Login to Firebase
``` bash

firebase login
```
Initialize Firebase in Your Project
``` bash

firebase init
```
Deploy to Firebase
``` bash

firebase deploy
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/dwivedishrey/Financial_Literacy.git
```

Go to the project directory

```bash
  cd your-repo-name
```

Install Dependencies for Frontend

```bash
  cd frontend
  npm install
```

Install Dependencies for Backend

```bash
  cd backend
  npm install
```
## Running the Application
Start the Backend Server
```bash
  node index.js
```
Start the Frontend Development Server
```bash
  npm start
```
Your application should now be running, with the frontend accessible at http://localhost:3000 and the backend server running on http://localhost:5000 (or any other configured port).
### Notes
Ensure both frontend and backend servers are running concurrently.
Refer to the respective directories (frontend and backend) for more specific details about their configurations and available scripts.



## Tech Stack

**Client:** React

**Server:** Node, Express

**Database:** MongoDB

**Authentication:** Firebase

**APIs**: Integration with CurrentAPI for real-time financial news and Gemini API for developing intelligent chatbots and enhance user interaction.

- **Graphs and Charts**: Chart.js




## Support

For support, email support@arthamarga.com or join our Slack channel.


## Screenshots

![Screenshot 2024-06-20 170912](https://github.com/dwivedishrey/Financial_Literacy/assets/97790062/16f7bbbe-32ba-415e-bdde-98acc6be31e0)


## Running Tests

To run tests, run the following command

```bash
  npm run 
```


## FAQ

#### What is ArthaMARGA?

ArthaMARGA is an interactive, user-friendly educational platform designed to enhance financial literacy. It provides tools and resources to help individuals manage their finances wisely, including budget tracking, expense management, investment monitoring, and educational courses.

#### Are there any costs associated with using ArthaMARGA?

ArthaMARGA offers both free and premium features. Basic financial literacy courses and tools are available for free, while advanced features and personalized financial advisory sessions might require a subscription.


## Features

#### Live Previews
Get real-time previews of your financial data and changes. As you input your income, expenses, and investments, see instant updates and visualizations, helping you understand your financial status at a glance.

#### AI-Powered Chatbot (ARTHAGURU)
ARTHAGURU offers real-time assistance, addressing user queries promptly and connecting them with financial advisors for immediate support. This enhances the learning experience and boosts user confidence in financial decision-making.

## Feedback

If you have any feedback, please reach out to us at support@arthamarga.com

