

class LoginPage{

  get usernameTextField (){
      return $('//android.widget.EditText[@content-desc="usernameTextInput"]');
  }

  get passwordTextField (){
    return $('//android.widget.EditText[@content-desc="passwordTextInput"]');
  }

  get loginBtn(){
    return $('//android.view.ViewGroup[@content-desc="loginButton"]/android.view.ViewGroup[2]');
  }

  //  get InvalidText(){
  //     return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView[2]');
  
 
}

module.exports = new LoginPage();