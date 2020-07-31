/// <reference types="cypress" />

import {Employee_FORM,ADDRESS_INPUT,EMAIL_INPUT,
        NAME_INPUT,PHONE_INPUT, ADD_BUTTON, 
        CITY_INPUT, STATE_INPUT, POSTAL_CODE_INPUT, SUCCESS_ALERT} from './employee.ui'

export function validateEmployeeFormIsVisble() {    
  cy.get(Employee_FORM).should('be.visible')
}

export function fillEmployeeForm(name, email, address, phone, city, state, postalCode) {    
  cy.get(NAME_INPUT).type(name)
  cy.get(EMAIL_INPUT).type(email)
  cy.get(ADDRESS_INPUT).type(address)
  cy.get(PHONE_INPUT).type(phone)
  cy.get(CITY_INPUT).type(city)
  cy.get(STATE_INPUT).type(state)
  cy.get(POSTAL_CODE_INPUT).type(postalCode)
}

export function addEmployeeAndValidateSuccesMessage() {   
  cy.get(ADD_BUTTON).click() 
  cy.get(SUCCESS_ALERT).should('be.visible')
}