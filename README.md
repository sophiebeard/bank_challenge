<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/sophie-beard-9a9842222/)



<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h1 align="center">Bank Challenge</h1>

  <p align="center">
    In this challenge, I was tasked with creating a bank account that was able to take withdraw and deposit requests, have a balance, and store a list of transactions so that they could be printed in a bank statement. This was the second project that I did as part of the Digital Futures Academy. This was my first time using spies and mocks in the testing framework. Although, it was my second time using Test Driven-Development (TDD), it was my first time using Jasmine, which I really enjoyed. It was also my first time incorporating encapsulation and single responsibility into an object-oriented project. 
    <br />
    <a href="[link to repo](https://github.com/sophiebeard/bank-challenge)"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="[link to repo](https://github.com/sophiebeard/bank-challenge)">Report Bug</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#project-review-and-roadmap">Project Review and Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
### Requirements

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```


#### Standard
- [ ] Meets the spec
- [ ] Developed test-first
- [ ] Passes tests and code is linted
- [ ] Encapsulates adding and storing Transactions in a class
- [ ] Encapsulates Statement formatting in a class
- [ ] Encapsulates Transaction data in a class



#### User Stories
```
1. As a user, I want to be able to make deposits into my bank account, so that my balance can increase. 
```
```
2. As a user, I want to be able to withdraw money from my bank account, so that my balance can decrease. 
```
```
3. As a user, I want to be able to print a bank statement, so that I can view my transactions. 
```

#### Domain Model

| Objects     | Properties                        | Messages                             | Output  |
| ----------- | --------------------------------- | ------------------------------------ | ------- |
| Account     | balance @Int                      | getBalance()                         | @Int    |
|             |                                   | setBalance(credit, debit)            | @Void   |
|             |                                   |                                      |         |
|             | transactions @Array[@transaction] | deposit(@transaction)                | @Void   |
|             |                                   | getDate()                            | @String |
|             |                                   | getCredit()                          | @Int    |
|             |                                   | getDebit()                           | @Int    |
|             |                                   | setBalance(credit, debit)            | @Void   |
|             |                                   |                                      |         |
|             |                                   | withdraw(@transaction)               | @Void   |
|             |                                   | getDate()                            | @String |
|             |                                   | getCredit()                          | @Int    |
|             |                                   | getDebit()                           | @Int    |
|             |                                   | setBalance(credit, debit)            | @Void   |
|             |                                   |                                      |         |
|             |                                   | getTransactions()                    | @Array  |
|             |                                   |                                      |         |
| Transaction | date @String                      | getDate()                            | @String |
|             |                                   | setDate()                            | @Void   |
|             |                                   |                                      |         |
|             | credit @Int                       | getCredit()                          | @Int    |
|             |                                   | setCredit()                          | @Void   |
|             |                                   |                                      |         |
|             | debit @Int                        | getDebit()                           | @Int    |
|             |                                   | setDebit()                           | @Void   |
|             |                                   |                                      |         |
| Statement   |                                   | printStatement(@Array[@transaction]) | @Void   |

Tests:
- Account
1. An account should be opened with £0
2. An account should be formulated with an empty array of transactions
3. An account should have a getTransactions method
4. An account should have a getBalance method
5. An account should have a setBalance method
6. setBalance should set the balance
7. Deposit should add a transaction to the transactions array
8. Withdraw should add a transaction to the transactions array
9. A transaction should update the total balance
10. A transaction should be included in the transaction array.
11. A transaction should update the total balance when a withdraw is made. 

- Transaction
1. There should be a getter method for date
2. getDate should return a string
3. There should be a getter method for credit
4. There should be a getter method for debit
5. There should be a setter method for credit
6. There should be a setter method for debit
7. setDebit should change the value of debit

- Statement
1. There should be a printStatement method.
2. printStatement should be called multiple times if there are multiple transactions.
<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- GETTING STARTED -->
## Getting Started

Jasmine is used as the test framework. 

* Install [jasmine](https://www.npmjs.com/package/jasmine), a JS browser testing framework. 
  
1. Clone the repo
   ```sh
   git clone (https://github.com/sophiebeard/bank-challenge)
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Project Review and Roadmap

- A useful learning point for me while completing this project is the encapsulate as you build the project. I started by declaring my properties and writing a few methods. When I came back to encapsulate the properties, I found that this was a more complicated process, because I needed to incorporate getter and setter methods where required, which could have been introduced originally. 
- In this project, the transaction date has been input as a type String. I would have liked to have input this so that it was a formatted Date type. One way that I considered doing this, was using [Moment.js](https://momentjs.com/). This is used to convert date objects into formatted strings, and the library needs to be imported. 
- If I were to repeat this project, I would spend more time planning out the code, and seeing how the user stories will impact how I build the program. I began by including methods and properties that were not required in the spec - such as returning a string. However, this would be one way that I would extend upon the project; for example, returning a string when a deposit is made: "Thank you for your deposit of £10. Your updated balance is £20".
- Because I changed direction a lot in the building process, it meant that I wrote and rewrote tests several times. One thing I have learnt from this project is not to delete previous code unless I have extended on it or I am absolutely sure that it is not needed (for example in the clean-up stage post project). This code should be commented out, in case I decide to revisit it. 
- The withdraw and deposit methods in this project are separate entities. I would like this to continue, however, it meant that I used repeated code in the Account class. I would like to incorporate withdraw and deposit into one method, so that I do not repeat code, but so that the different methods are maintained. 
- This project met the acceptance criteria of the challenge and the program provided the expected outcome. The tests are decoupled and cover the whole application. 
- The methods deposit() and withdraw() have the exactly implementation. I could get rid of one of them and rename the other as something like makeTransactions().
- Inside the two methods mentioned above I created a new object to be able to store the account balance inside the trans object. What I could do instead is to create a new property for the Transaction class that would store this information, something like transactionBalance and then a method like a setTransactionBalance(). Then inside the suggested makeTransactions( method, I could use the transaction object that I received in this method to call the transaction’s setTransactionBalance() method.
- I could also break the printStatement() method into small methods, one for printing the header of the statement and another to print each row of the statement.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are encouraged and greatly appreciated! If you have a suggestion for what could make this better, please fork the repo and create a pull request. Thanks!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Sophie Beard - beardsophie@outlook.com

Project Link: [https://github.com/sophiebeard/bank-challenge](https://github.com/sophiebeard/bank-challenge)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* This README file was formatted from othneildrew's [template](https://github.com/sophiebeard/Best-README-Template).
* The unshift method was new to me for this project. The information I needed to incorporate it into my project was found at [w3schools](https://www.w3schools.com/jsref/jsref_unshift.asp)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 





































