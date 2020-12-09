// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    login(){
      elements = {
     
         username:"email",
         password:"password",
         submit :".btn-primary",
         
      },

      //this.fillField(elements.username,"ideas.test@rediffmail.com")
      //this.fillField(elements.password,"12345678")
      this.fillField(elements.username,"userdemo@qforms.com")
      this.fillField(elements.password,"123456")
      this.click(elements.submit)
     
     }

  });
}
