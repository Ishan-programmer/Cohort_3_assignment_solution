
function add(){
    let inputType = document.querySelector("#inputType").value
    let inputValue = document.querySelector("#inputValue").value
    let placeholderValue = document.querySelector("#placeholderValue").value;

    let createEl = document.createElement("div")
    if(inputType=="h3"){
        let h3 = document.createElement("h3")
        h3.innerHTML = inputValue
        createEl.appendChild(h3)
        // alert(h3.innerHTML)
    }
    if(inputType=="input"){
        let inputLabel = document.createElement("label")
        inputLabel.innerText = inputValue

        let input = document.createElement("input")
        input.setAttribute("placeholder", placeholderValue)

        createEl.appendChild(inputLabel)
        createEl.appendChild(input)
    }
    if(inputType=="radio"){
        let inputLabel = document.createElement("label");
        inputLabel.innerText = inputValue;

        let options = document.createElement("div")
        options.innerHTML = `<input type="radio" id="radio-${inputValue}-0" name="${inputValue}"><label for="radio-${inputValue}-0">Option 1</label><br><input type="radio" id="radio-${inputValue}-1" name="${inputValue}"><label for="radio-${inputValue}t-1">Option 2</label><br><input type="radio" id="radio-${inputValue}-2" name="${inputValue}"><label for="radio-${inputValue}-2">Option 3</label><br>`

        createEl.appendChild(inputLabel)
        createEl.appendChild(options)

    }
    document.querySelector("#form-preview").appendChild(createEl)
}