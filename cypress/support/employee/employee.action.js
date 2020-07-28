/// <reference types="cypress" />

import {Employee_FORM} from './employee.ui'

export function validateEmployeeFormIsVisble() {    
  cy.get(Employee_FORM).should('be.visible')
}