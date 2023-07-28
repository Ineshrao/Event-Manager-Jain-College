document.getElementById("event").addEventListener("change", generateInputs);
function generateInputs() {
    const ch=document.getElementById("event").value;
    let numOfInputs = 0;
    let addnumOfInputs = 0;
    if(ch=="Quiz"){
        numOfInputs = 3;
    } else if (ch=="Cosplay"){
        numOfInputs = 2;
        addnumOfInputs = 1;
    } else if (ch=="Science Show"){
        numOfInputs = 2;
    }else if (ch=="Expression"){
        numOfInputs = 6;
        addnumOfInputs = 4;
    }else if (ch=="Video Making"){
        numOfInputs = 2;
    }else if (ch=="Famelab"){
        numOfInputs = 2;
    }else if (ch=="Math Puzzle"){
        numOfInputs = 2;
    }else if (ch=="Gaming"){
        numOfInputs = 5;
    }else if (ch=="Photography"){
        numOfInputs = 1;
    }else if (ch=="Logo Making"){
        numOfInputs = 2;
    }else if (ch=="Crime Detection"){
        numOfInputs = 3;
    }else if (ch=="Event X"){
        numOfInputs = 3;
    }
    
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; 

    for (let i = 1; i <= numOfInputs+addnumOfInputs; i++) {
        
        const label1 = document.createElement("label");
        const label2 = document.createElement("label");
        const label3 = document.createElement("label");
        const inputPair = document.createElement("div");
        const labelPair = document.createElement("div");
        inputPair.classList.add("input-pair");

        const input1 = document.createElement("input");
        input1.type = "text";
        input1.name = `input_${i}_1`;
        

        const input2 = document.createElement("input");
        input2.type = "text";
        input2.name = `input_${i}_2`;

        const input3 = document.createElement("input");
        input3.type = "text";
        input3.name = `input_${i}_3`;
        if(i>numOfInputs){
            label1.textContent = `Team Member ${i} (Optional)`;
            input1.placeholder = `Enter Name (Optional)`;
            input1.value="";
            label2.textContent = `Mobile Number (Optional)`;
            input2.placeholder = `Mobile Number (Optional)`;
            input2.value="";
            label3.textContent = `Email (Optional)`;
            input3.placeholder = `Email (Optional)`;
            input3.value="";
        }
        else{
            label1.textContent = `Team Member ${i}`;
            input1.placeholder = `Enter Name`;
            input1.required = true;
            label2.textContent = `Mobile Number `;
            input2.placeholder = `Mobile Number `;
            input2.required = true;
            label3.textContent = `Email `;
            input3.placeholder = `Email `;
            input3.required = true;
        }

        inputPair.appendChild(label1);
        inputPair.appendChild(input1);
        inputPair.appendChild(label2);
        inputPair.appendChild(input2);
        inputPair.appendChild(label3);
        inputPair.appendChild(input3);
        inputContainer.appendChild(labelPair);
        inputContainer.appendChild(inputPair);

        if(i==numOfInputs+addnumOfInputs){
            
            const label4 = document.createElement("label");
            const input4 = document.createElement("input");
            input4.type = "text";
            input4.name = `team`;
            label4.textContent = `Team Name`;
            input4.placeholder = `Team College Name`;
            input4.required = true;
            inputContainer.appendChild(label4);
            inputContainer.appendChild(input4);

            const label5 = document.createElement("label");
            const input5 = document.createElement("input");
            input5.type = "text";
            input5.name = `college`;
            label5.textContent = `College Name`;
            input5.placeholder = `Enter College Name`;
            input5.required = true;
            inputContainer.appendChild(label5);
            inputContainer.appendChild(input5);
            
            const input6 = document.createElement("input");
            const input7 = document.createElement("input");
            input6.type = "hidden";
            input6.name = "Inputs";
            input6.value = numOfInputs;
            inputContainer.appendChild(input6);
            input7.type = "hidden";
            input7.name = "addInputs";
            input7.value = addnumOfInputs;
            inputContainer.appendChild(input7);
        }
    }
}



function submitForm() {
    document.getElementById("loadingModal").style.display = "block";
    const form = document.getElementById("myForm");
    const formData = new FormData(form);
    console.log(formData);
    fetch('submit.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        window.location.href='success.html';
    })
    .catch(error => {
        window.location.href='fail.html';
    });
}
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
});