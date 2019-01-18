describe('Auto Loan Calculator Test', function () {
	it('Tests all calculator fields with errors', function () {
		cy.visit('https://www.bankrate.com/calculators/auto/auto-loan-calculator.aspx')

		//Test invalid amount
		cy
			.get('[name=amount]')
			.type('0')
			.get('div.br-amount.form-input.--data-format-left.--has-error')

		//Test amount updates when value is inputted
		cy
			.get('[name=amount]')
			.type('{backspace}')
			.type('20000')
			.type('{enter}')
			.get('p.numeral.--alpha')
			.contains('359')

		//Test term drop down items exist and update when selected
		cy
			.get('[data-ri-filtername=term]').click()
			.get('div.dropdown__list-container').should('have.length', 3)
			.contains('36 months').click()
			.get('p.numeral.--alpha')
			.contains('582')

		//Test new=used updates when selected
		cy
			.get('[data-ri-filtername=new-used').click()
			.get('[data-ri-filtername=new-used').contains('New').click()

		//Test invalid rate throws error
		cy
			.get('[data-ri-filtername=interest-rate]').click()
			.type('0')
			.type('{enter}')
		cy.contains('Invalid rate')

		//Test rate updates when value is inputted
		cy
			.get('[data-ri-filtername=interest-rate]').click()
			.type('{backspace}')
			.type('3.79')
			.type('{enter}')

		//Test available rates drop down
		cy
			.get('div.find-rate__dropdown-wrapper.br-dropdown-container').should('have.length', 1)
			
		//Test calculated values
		cy
			.get('p.numeral.--alpha')
			.contains('589')
			.get('span')
			.contains('20,000')
			.get('span')
			.contains('1,190')

		//Click primary CTA
		cy
			.get('a.button.--primary')
			.contains('Compare Loan Rates')
			.click()

		//Confirms page loads
		cy.url().should('eq', 'https://www.bankrate.com/loans/auto-loans/rates/')

	})
})