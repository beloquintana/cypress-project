/// <reference types="cypress" />

import {LOGIN_V2_LINK} from './home.ui'

export function clickOnLoginV2Link() {    
  cy.get(LOGIN_V2_LINK).click()
}

export function navigateToHomePage() {    
  cy.visit('/aut')
}