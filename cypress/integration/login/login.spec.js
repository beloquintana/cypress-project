/// <reference types="cypress"/>

import {clickOnLoginV1Link, navigateToHomePage} from '../../support/home/home.action'
import {loginsAs} from '../../support/login/login.action'
import {validateEmployeeFormIsVisble} from '../../support/employee/employee.action'

describe('Login tests',()=>{
    it('Test succesfull login',()=>{
        
        clickOnLoginV1Link()
        loginsAs('user','user123')

        validateEmployeeFormIsVisble()
    })
})