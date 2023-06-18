import { faker } from '@faker-js/faker';
import signupLogin from '../PageObject/signupLogin.js'

const randomName = faker.person.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

describe('Login and Sign up test cases', function(){

    before(()=>{
        cy.visit('https://automationexercise.com/')
        //cy.visit('/')
        cy.title('eq', 'Automation Exercise')
    })

    it.only('Register user', function(){
        signupLogin.registerUser()


    } )

    it('Login user with correct e-mail and password', function(){
        
    } )

    it('Login user wth incorrect e-mail and password', function(){
        
    } )

    it('Logout user', function(){
        
    } )

    it('Register user with existing e-mail', function(){
        
    } )




}
)