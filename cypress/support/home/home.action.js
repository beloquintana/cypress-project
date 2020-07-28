/// <reference types="cypress" />

import {LOGIN_V1_LINK} from './home.ui'

export function clickOnLoginV1Link() {    
  cy.get(LOGIN_V1_LINK).click()
}

export function navigateToHomePage() {    
  cy.visit('/aut')
}