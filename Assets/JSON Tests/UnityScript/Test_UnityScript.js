//#pragma strict
//
//import SimpleJSON;
//
////static var title = "";
//
//function Start()
//{
//
//	
//	
//	var request : WWW = new WWW("http://www.buzzfeed.com/buzzfeed/api/buzzes?since=1401100001&until=1401109999&session_key=2ee4e2768c44aedd9481f2e70855fb6716323a5c8995da8a7386fd863aee54bfhackathon2");
//    yield request;
//    
//    if (request.error == null || request.error == "")
//        {
//            var Buzz = JSON.Parse(request.text);
//
//            Debug.Log(Buzz["success"].Value);
//            Debug.Log(Buzz["buzzes"][0]["uri"].Value);
//
//        }
//        else
//        {
//            Debug.Log("WWW error: " + request.error);
//        }
//        		
//}
//
