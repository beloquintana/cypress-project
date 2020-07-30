/// <reference types="cypress" />

import {Employee_FORM,ADDRESS_TEXT_AREA,EMAIL_INPUT,
        NAME_INPUT,PHONE_INPUT, ADD_BUTTON} from './employee.ui'

export function validateEmployeeFormIsVisble() {    
  cy.get(Employee_FORM).should('be.visible')
}

export function fillEmployeeForm(name, email, address, phone) {    
  cy.get(NAME_INPUT).type(name)
  cy.get(EMAIL_INPUT).type(email)
  cy.get(ADDRESS_TEXT_AREA).type(address)
  cy.get(PHONE_INPUT).type(phone)
}

export function addEmployeeAndValidateAlert() {    
  const stub = cy.stub().as('Confirmation alert')
  cy.on('window:alert', stub)

  cy.get(ADD_BUTTON).click().then(() => {
    expect(stub).to.have.been.calledOnce
    expect(stub.getCall(0)).to.be.calledWith('Success! Employee successfully added.')
  })
}