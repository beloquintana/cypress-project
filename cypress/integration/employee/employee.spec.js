/// <reference types="cypress"/>

import {clickOnLoginV1Link, navigateToHomePage} from '../../support/home/home.action'
import {loginsAs} from '../../support/login/login.action'
import {validateEmployeeFormIsVisble,fillEmployeeForm, addEmployeeAndValidateAlert} from '../../support/employee/employee.action'

describe('Employee tests',()=>{
    it('Test add employee',()=>{
        navigateToHomePage()
        clickOnLoginV1Link()
        loginsAs('user','user123')
        validateEmployeeFormIsVisble()        

        fillEmployeeForm('Juan','juan@gmail.com','MTZ','556682');
        addEmployeeAndValidateAlert()  
    })
})