function validate()
{

    let name=document.getElementById('Name').value;

    if(name.length==0)
    {
            let nameSpan=document.getElementById('nameSpan');
            nameSpan.innerHTML='*Name Required';
            return false;
    }
   
  
    if(name.length<=4)
    {
        let nameSpan=document.getElementById('nameSpan');
            nameSpan.innerHTML='*Name Should Contains Atleast 4 Characters';
            return false;

    }

    let email=document.getElementById('email').value;
    if(email.length==0)
    {

        let emailSpan=document.getElementById('emailSpan');
            emailSpan.innerHTML='*Email Required';
            return false;

    }
    if(email.includes('@')==false){

        
        let emailSpan=document.getElementById('emailSpan');
            emailSpan.innerHTML='*Email Should Contains @ ';
            return false;

    }

     if(email.includes('@')==false){

        
        let emailSpan=document.getElementById('emailSpan');
            emailSpan.innerHTML='*Email Should Contains @ ';
            return false;

    }



     if(email.includes('@')==false){

        
        let emailSpan=document.getElementById('emailSpan');
            emailSpan.innerHTML='*Email Should Contains @ ';
            return false;

    }
    
    if(email.includes('.')==false)
    {

        
        let emailSpan=document.getElementById('emailSpan');
        emailSpan.innerHTML='*Email Should Contains "." ';
        return false;

     }


     if(email.includes('com')==false)
    {

        
        let emailSpan=document.getElementById('emailSpan');
        emailSpan.innerHTML='*Email Should Contains ".com" at end ';
        return false;

    }

    let username=document.getElementById('username').value;
    if(username.length==0)
    {
       let userSpan=document.getElementById('userSpan');
       userSpan.innerHTML='User Name Required' ;
       return false;
    }

    let x=username[0]==username[0].toUpperCase();

    if(x==false)
    {
       let userSpan=document.getElementById('userSpan');
       userSpan.innerHTML='User Name Starts With Capital Letter' ;
       return false;
    }
    if(! username.match(/[A-Z]/)){
        let userSpan=document.getElementById('userSpan');
        userSpan.innerHTML='User Name Contains Atleast one capital letter' ;
       return false;

    }
    
    if(! username.match(/[a-z]/)){
        let userSpan=document.getElementById('userSpan');
        userSpan.innerHTML='User Name Contains Atleast one small letter' ;
       return false;

    }
    let n=5;
    
    
    if(username.length<=5  || username.length>=10) 
        {
            let userSpan=document.getElementById('userSpan');
       userSpan.innerHTML='User Name Contains Min 5 and Max 10 Characters' ;
       return false;

       
    }
    
    let password=document.getElementById('password').value;
    if(password.length==0)
    {
        let passwordSpan=document.getElementById('passwordSpan');
        passwordSpan.innerHTML='*Password Required';
        return false;
    }
    
    
    if(! password.match(/\d+/)){
        let passwordSpan=document.getElementById('passwordSpan');
        passwordSpan.innerHTML='*Password Contains Atleast one digit';
        return false;
        
    }

    if(! password.match(/[a-z]/)){
        let passwordSpan=document.getElementById('passwordSpan');
        passwordSpan.innerHTML='*Password Contains Atleast one small letter';
        return false;
        
    }
    
    if(! password.match(/[!@#$*&]/)){
        let passwordSpan=document.getElementById('passwordSpan');
        passwordSpan.innerHTML='*Password Contains Atleast one special symbol';
        return false;
    }
    if(password.length<=5 || password>=12){
        let passwordSpan=document.getElementById('passwordSpan');
        passwordSpan.innerHTML='*Password Contains Min 5 Characters Max 12 Characters';
        return false;
    }
   let cPassword=document.getElementById('c-password').value;
   if(cPassword.length==0)
   {
       let cpasswordSpan=document.getElementById('c-passwordSpan');
       cpasswordSpan.innerHTML='*Password Required';
       return false;
    }
    
    if((cPassword==password)==false)
        {
            let cpasswordSpan=document.getElementById('c-passwordSpan');
            cpasswordSpan.innerHTML='*Password Should be matched';
            return false;
        }
        
        let number=document.getElementById('number').value;
        if(number.length==0)
   {
    let numberSpan=document.getElementById('numberSpan');
    numberSpan.innerHTML='Phone Number Should be Required';
    return false;
}

if(number.length<=9 || number.length>10)
    {
        let numberSpan=document.getElementById('numberSpan');
        numberSpan.innerHTML='Phone Number Should conatin 10 digits only';
        return false;
    }
}



//     let y=/^[A-Z]\w+$/

//    if(username.includes(y)==false)
//     {
//        let userSpan=document.getElementById('userSpan');
//        userSpan.innerHTML='User Name Contains Atleast one small letter' ;
//        return false;
//     }

    // if(! username.match(/\d+/)){
    //     let userSpan=document.getElementById('userSpan');
    //    userSpan.innerHTML='User Name Contains Atleast one Digit letter' ;
    //    return false;

    // }
    
    
            // if(! username.match(/[!@#$*&]/)){
            //     let userSpan=document.getElementById('userSpan');
            //    userSpan.innerHTML='User Name Contains Atleast one special letter' ;
            //    return false;
    
            // }



    
    
      
    
    

   

    // if(number.length==0)
    // {
    //     numsp.innerHTML="Number required"
    //     return false;
    // }

    // if(number.length>=11)
    // {
    //     numsp.innerHTML="Number conatains 10"
    //     return false;
    // }
    // }