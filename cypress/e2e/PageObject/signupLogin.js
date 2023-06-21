import { faker, fakerEN_CA } from '@faker-js/faker';

const randomName = faker.person.firstName('female'); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomPass = faker.internet.password()
const randomLastName = faker.person.lastName('female')
const randomAddress = faker.location.streetAddress()
const randomCity = fakerEN_CA.location.city()
const randomZipCode = faker.location.zipCode()
const randomMobile = faker.phone.number()
const randomState = fakerEN_CA.location.state()

//Locators goes here
const signUpLoginBtn = '.shop-menu > .nav > :nth-child(4) > a';
const regUserName = '[data-qa="signup-name"]';
const regUserEmail = '[data-qa="signup-email"]';
const signUpBtn = '[data-qa="signup-button"]';

//Locators of Enter Account Information section goes here.
const mrTitleCheck = '#id_gender1';
const mrsTitleCheck = '#id_gender2';
const nameField = '#name';
const emailField = '#email';
const passField = '#password';
const dayBirth = '#days';
const monthBirth = '#months';
const yearBirth = '#years';
const newsletterCheck = '#newsletter';
const receiveOffersCheck = '#optin';

//Locators of Address Information goes here.
const firstNameField = '#first_name';
const lastNameField = '#last_name';
const companyField = '#company';
const addressField = '#address1';
const country = '#country';
const stateField = '#state';
const cityField = '#city';
const zipcodeField = '#zipcode';
const mobileNumberField = '#mobile_number';
const createAccBtn = '#form > div > div > div > div > form > button';


class signupLogin{

    static newUser(){
        cy.get(signUpLoginBtn).click()
        cy.contains('New User Signup!')
        cy.get(regUserName).click().type(randomName)
        cy.get(regUserEmail).click().type(randomEmail)
        cy.get(signUpBtn).should('be.visible').click()
        //cy.get(':nth-child(1) > b').should('have.text','<b>ENTER ACCOUNT INFORMATION<b/>')
        cy.wait(2000)

        //Interactions of Account Information goes here.
        cy.get(mrsTitleCheck).check()
        cy.get(firstNameField).should('be.visible')
       /* if (firstNamefield.contains(randomEmail) == randomEmail){
            cy.log('the first name equals to the first input name')
        }else{
            cy.log('the first name is not similar to the previously input name')
        }
        */
       cy.get(lastNameField).should('be.visible')
       cy.get(passField).should('be.visible').type(randomPass)
       cy.get(dayBirth).select('18')
       cy.get(monthBirth).select('10')
       cy.get(yearBirth).select('1995')
       cy.get(newsletterCheck).check()
       cy.get(receiveOffersCheck).check()

       //Interactions in Address Information goes here.
       cy.get(firstNameField).should('be.visible').type(randomName)
       cy.get(lastNameField).should('be.visible').type(randomLastName)
       cy.get(addressField).should('be.visible').type(randomAddress)
       cy.get(country).should('be.visible').select('Canada')
       cy.get(stateField).should('be.visible').type(randomState)
       cy.get(cityField).should('be.visible').type(randomCity)
       cy.get(zipcodeField).should('be.visible').type(randomZipCode)
       cy.get(mobileNumberField).should('be.visible').type(randomMobile)
       cy.get(createAccBtn).should('be.visible').click()
       cy.get('.col-sm-9 > :nth-child(2)').contains('Congratulations! Your new account has been successfully created!')

    }

    static loginUserOK(){
        

    }

    static loginWrongEmail(){

    }

    static logOut(){

    }

}

export default signupLogin