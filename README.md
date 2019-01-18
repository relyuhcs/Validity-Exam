# Validity-Exam

Story: Test that the calculator and all of the fields associated with it are working as expected.

The test plan is as follows:

  1. Input invalid value for the 'amount' text box.
    Confirm expected error occurs
  
  2. Input valid value for the 'amount' text box.
    Confirm the calculated value changes to the expected new value
  
  3. Open the 'term' dropdown.
    Confirm the expected amount of items exist within the drop down
  
  4. Select the '36 months' option.
    Confirm the calculated value changes to the expected new value
  
  5. Open the 'new/used' dropdown and select 'New".
    //Attempted to confirm the amount of options were 2, somehow there are 3 options found, not sure if this is a bug.
  
  6. Input invalid value for the 'rate'.
    Confirm error is thrown
  
  7. Input valid value for the 'rate'.
    Confirm ablity to input a valid value
  
  8. Check 'available rates' drop down.
    Confirm expected amount of items exist within the drop down
  
  9. Check end calculations.
    Confirm they match up with the expected values
    
  10. Click the primary CTA next to the calculator
  
  11. Confirm the expected URL loads
