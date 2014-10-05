class LoginView implements View {

    public final static var NAME : String = "Login";

    public var guiSkin : GUISkin;
    
    public var header1Style : GUIStyle;
    public var header2Style : GUIStyle;
    public var header2ErrorStyle : GUIStyle;
    public var formFieldStyle : GUIStyle;
    
    public var data : LoginData = new LoginData();
    
    public var error = false;
    public var errorMessage : String = "";
    
    public var enterGameHandler;
    public var openRegistrationHandler;

    private var blockUI = false;

    function render() {

        var screenWidth = Screen.width;
        var screenHeight = Screen.height;
    
        var xShift = (screenWidth - 260)/2;
        var yShift = (screenHeight - 260)/2;
       
        GUI.skin = guiSkin;
        
        // Disabling UI if blockUI is true: 
        GUI.enabled = !blockUI;

        // Main label:
        GUI.Label(Rect(0, yShift, screenWidth, 30), "Welcome to the Game", header1Style);
       
        // Message label:
        if(error) {
            GUI.Label(Rect(0, yShift + 70, screenWidth, 30), errorMessage, header2ErrorStyle);
        } else {
            GUI.Label(Rect(0, yShift + 70, screenWidth, 30), "Enter your Login and Password", header2Style);
        }
       
        // Login label and login text field:
        GUI.Label(Rect(xShift, yShift + 120, 100, 30), "Login:", formFieldStyle);
        data.login = GUI.TextField(Rect(xShift + 110, yShift + 120, 150, 30), data.login, 16);
    
        // Password label and password text field:
        GUI.Label(Rect(xShift, yShift + 170, 100, 30), "Password:", formFieldStyle);
        data.password = GUI.PasswordField(Rect(xShift + 110, yShift + 170, 150, 30), data.password, "*"[0], 16);
       
        // Login button:
        if(GUI.Button(Rect(xShift, yShift + 220, 120, 30), "Enter Game")) {
            enterGameHandler();
        }
       
        // Switch to registration view button:
        if(GUI.Button(Rect(xShift + 140, yShift + 220, 120, 30), "Registration")) {
            openRegistrationHandler();
        }

        // Enabling UI: 

        GUI.enabled = true;

    }

    public function setBlockUI(blockUI) {
        this.blockUI = blockUI;
    }

}