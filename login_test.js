Feature("Testing Login");

Before((I)=>{
    I.amOnPage('/#/login');
    I.login();

})

Scenario('Login', (I) => {
    I.amOnPage('/#/login');
    I.click('.panel-red')
    I.click('#headingFormControls')
    I.wait(2)
    pause()
    I.click('#textbox')
    I.seeElement('textbox')
    I.click('#paragraph')
    I.click('#paragraph')
    I.seeNumberOfElements('paragraph',3)
  });