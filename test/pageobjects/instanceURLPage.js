

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InstanceURLPage{
    /**
     * define selectors using getter methods
     */
    // get inputUsername () {
    //     return $('#username');
    // }

    // get inputPassword () {
    //     return $('#password');
    // }

    // get btnSubmit () {
    //     return $('button[type="submit"]');
    // }

    get textFieldIntance (){
        return $('//android.widget.EditText[@content-desc="loginInstanceTextInput"]');
    }

    get ContinueBtn(){
         return $('(//android.view.ViewGroup[@content-desc="loginButton"])[1]/android.view.ViewGroup[2]');
     }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // async login (username, password) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }

   
}

module.exports = new InstanceURLPage();
