/// <reference types="cypress"/>

import {clickOnLoginV2Link} from '../../support/home/home.action'
import {loginsAs} from '../../support/login/login.action'
import {validateEmployeeFormIsVisble} from '../../support/employee/employee.action'

describe('Login tests',()=>{
    it('Test succesfull login',()=>{
        
        clickOnLoginV2Link()
        loginsAs('admin','admin123')

        validateEmployeeFormIsVisble()
    })
})