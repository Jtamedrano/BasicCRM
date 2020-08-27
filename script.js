var contact = [];

            function add() {
                var fName = document.getElementById("firstName").value;
                var lName = document.getElementById("lastName").value;
                var phone = document.getElementById("phoneNumber").value;
                var email = document.getElementById("email").value;
                var streetAddress = document.getElementById("streetAddress").value;
                var city = document.getElementById("city").value;
                var state = document.getElementById("state").value;
                var zip = document.getElementById("zip").value;
                var address = "";
                var fullName = "";

                if((fName == "" || fName == null) || (lName == "" || lName == null)){
                    fullName = null;
                }
                else{
                    fullName = fName + " " + lName;
                };
                if(phone == null || phone == ""){phone = "null"};
                if(email == null || email == ""){email = "null"};
                if(streetAddress == null || streetAddress == ""){streetAddress = "null"};
                if(streetAddress == null || streetAddress == ""){address = "null"}
                else{address = streetAddress + ", " + city + ", " + state + " " + zip};

                var newContact  = {
                    newFName    :   fName,
                    newLName    :   lName,
                    newFullName :   fullName,
                    newPhone    :   phone,
                    newEmail    :   email,
                    newAddress  :   address,
                    newStreetAddress    :   streetAddress,
                    newCity     :   city,
                    newState    :   state,
                    newZip  :   zip
                }

                contact.push(newContact);

                updateDiv();
            }

            function updateDiv(){
                var tempContent = "";
                for(var i = 0; i < contact.length; i++){

                    if((contact[i].newFullName !== "") && (contact[i].newFullName !== null) && (contact[i].newFullName !== "null")) {
                        tempContent += "<p>Name : " + contact[i].newFullName + "</p>";
                        if((contact[i].newPhone !== "") && (contact[i].newPhone !== null) && (contact[i].newPhone !== "null")) {
                            tempContent += "<p>Phone : " + contact[i].newPhone + "</p>";
                        }
                        if((contact[i].newEmail !== "") && (contact[i].newEmail !== null) && (contact[i].newEmail !== "null")) {
                            tempContent += "<p>Email : " + contact[i].newEmail + "</p>";
                        }
                        if((contact[i].newCity !== "") && (contact[i].newCity !== null) && (contact[i].newCity !== "null") && 
                            (contact[i].newZip !== "") && (contact[i].newZip !== null) && (contact[i].newZip !== "null") && 
                            (contact[i].newStreetAddress !== "") && (contact[i].newStreetAddress !== null) && (contact[i].newStreetAddress !== "null")) {
                                tempContent += "<p>Address : " + contact[i].newAddress + "</p>";
                            } else if((contact[i].newStreetAddress !== "") && (contact[i].newStreetAddress !== null) && (contact[i].newStreetAddress !== "null")) {
                            tempContent += "<p>Address : " + contact[i].newStreetAddress + "</p>";
                        }
                    } else {
                        tempContent += "<p>";
                    }

                   tempContent += "<p><br><button onclick='del("+ i +")'>Delete</button>"
                   + "</p>";
                }

                document.getElementById("contact-list").innerHTML = tempContent;
            }

            function del(i){
                contact.splice(i, 1);

                updateDiv();
            }