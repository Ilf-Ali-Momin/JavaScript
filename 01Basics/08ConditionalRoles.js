var user = "testprep";
switch (user) {
  case "admin":
     console.log("You get full access");
    
    break;
    case "Subadmin":
     console.log("You get  access to create/delete courses ");

    
    break;
    case "testprep":
      console.log("You get  access to create/delete tests ");
      
     
     break;
     case "user":
      console.log("You get  access to consume content ");
      
     
     break;
  default:
    console.log("trial user");
    break;
}