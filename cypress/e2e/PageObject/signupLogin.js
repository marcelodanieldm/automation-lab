import { faker } from '@faker-js/faker';

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

//Locators goes here
const signUpLoginBtn = '//*[@id="header"]/div/div/div/div[2]/div/ul/li[4]/a/i';
const regUserName = '//*[@id="form"]/div/div/div[3]/div/form/input[2]';
const regUserEmail = '//*[@id="form"]/div/div/div[3]/div/form/input[3]';
const signUpBtn = '//*[@id="form"]/div/div/div[3]/div/form/button';

//Locators of Enter Account Information section goes here.
const mrTitleCheck = '';
const mrsTitleCheck = '';
const nameField = '';
const emailField = '';
const passField = '';
const dayBirth = '';
const monthBirth = '';
const yearBirth = '';
const newsletterCheck = '';
const receiveOffersCheck = '';

//Locators of Address Information goes here.
const firstNameField = '';
const lastNameField = '';
const companyField = '';
const addressField = '';
const country = '';
const stateField = '';
const cityField = '';
const zipcodeField = '';
const mobileNumberField = '';
const createAccBtn = '';


class signupLogin{

    static registerUser(){
        cy.get(signUpLoginBtn).click()
        cy.should('have.text', 'New User Signup!')
        cy.xpath(regUserName).click().type()
        cy.xpath(regUserEmail).click().type()
        cy.xpath(signUpBtn).should('be.visible').click()
        cy.should('have.text', 'ENTER ACCOUNT INFORMATION')



    }

    static loginUserOK(){

    }

    static loginWrongEmail(){

    }

    static logOut(){

    }

}

export default signupLogin