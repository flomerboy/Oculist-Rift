﻿// Common GUI skin:
public var guiSkin : GUISkin;

// GUI styles for labels:
public var header1Style : GUIStyle;
public var header2Style : GUIStyle;
public var header2ErrorStyle : GUIStyle; 
public var formFieldStyle : GUIStyle;
public var errorMessageStyle : GUIStyle;

// Active view name:
var activeViewName : String = LoginView.NAME;

// Map views by name:
var viewByName : Hashtable;

// Login view:
var loginView : LoginView;


// Do we need block UI:
var blockUI = false;

// This function will be called when scene loaded:
function Start () {   

    // Setup of login view:
    loginView.guiSkin = guiSkin;
    loginView.header1Style = header1Style;
    loginView.header2Style = header2Style;
    loginView.header2ErrorStyle = header2ErrorStyle;
    loginView.formFieldStyle = formFieldStyle;
    
    viewByName = new Hashtable();
    
    // Adding login view to views by name map:
    viewByName[LoginView.NAME] = loginView;
}


// This function will draw UI components
function OnGUI () {

    // Getting current view by active view name:
    var currentView : View = viewByName[activeViewName];
 
    // Set blockUI for current view:
    currentView.setBlockUI(blockUI);

    // Rendering current view:
    currentView.render();



    // Show box with "Wait..." when UI is blocked:
    var screenWidth = Screen.width;
    var screenHeight = Screen.height;
    if(blockUI) {
        GUI.Box(Rect((screenWidth - 200)/2, (screenHeight - 60)/2, 200, 60), "Wait...");
    }
}