function BMI(){
    if((bst - hip) >= 3.6 && (bst - wst) < 9)
                {
                    document.getElementById("result").innerHTML="Your Body Shape is Inverted Triangle" ;
                }
                
            else if((hip - bst) >= 3.6 && (hip - wst) < 9)
                {
                    document.getElementById("result").innerHTML="Your Body Shape is Triangle";
                }
                
            else if((his - bst) < 3.6 && (bst - hip) < 3.6 && (bst - wst) < 9 && (hip - wst) < 10)
                {
                    document.getElementById("result").innerHTML="Your Body Shape is Rectangle";
                }
            else if((bst - hip) <= 1 && (hip - bst) < 3.6 && (bst - wst) >= 9 || (hip - wst) >= 10)
            {
                document.getElementById("result").innerHTML="Your Body Shape is Hour-glass";
            }
            else{
                document.getElementById("result").innerHTML="Body Shape not found";
            }
    }