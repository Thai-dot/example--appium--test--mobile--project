

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

    //  get InvalidText(){
    //     return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[2]');
    
   
}

module.exports = new InstanceURLPage();
