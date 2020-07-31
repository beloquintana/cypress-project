/// <reference types="cypress"/>

import {clickOnLoginV1Link} from '../../support/home/home.action'
import {loginsAs} from '../../support/login/login.action'
import {fillEmployeeForm, addEmployeeAndValidateAlert} from '../../support/employee/employee.action'

describe('Employee tests',()=>{

    beforeEach(() => {
        clickOnLoginV1Link()
        loginsAs('user','user123')
    })

    it('Test add employee',()=>{

        fillEmployeeForm('Juan','juan@gmail.com','MTZ','556682');
        addEmployeeAndValidateAlert()  
    })
})