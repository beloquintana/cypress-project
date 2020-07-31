/// <reference types="cypress"/>

import {clickOnLoginV2Link} from '../../support/home/home.action'
import {loginsAs} from '../../support/login/login.action'
import {fillEmployeeForm, addEmployeeAndValidateSuccesMessage} from '../../support/employee/employee.action'

describe('Employee tests',()=>{

    beforeEach(() => {
        clickOnLoginV2Link()
        loginsAs('admin','admin123')
    })

    it('Test add employee',()=>{

        fillEmployeeForm('Juan','juan@gmail.com','MTZ','556682','MTZ','CUB','11500');
        addEmployeeAndValidateSuccesMessage()  
    })
})