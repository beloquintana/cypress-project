/// <reference types="cypress" />

import {LOGIN_BUTTON,PASS_INPUT,USER_INPUT} from './login.ui'

export function loginsAs(user, pass) {    
  cy.get(USER_INPUT).type(user)
  cy.get(PASS_INPUT).type(pass)
  cy.get(LOGIN_BUTTON).click()
}