
let buttons = document.querySelectorAll('button')
let string = ""
Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        if (e.target.innerText == '=') {
            try {
                string = document.getElementById('input').value
                string = eval(string)
                document.getElementById('input').value = string;
            }
            catch (err) {
                document.getElementById('input').value = "ERROR";
            }
        }

        else if (e.target.innerText == 'C') {
            string = ""
            document.getElementById('input').value = string;
        }
        else {
            string = string + e.target.innerText
            document.getElementById('input').value = string;
        }

    })
})

 document.getElementById('input').addEventListener('keydown', (event) => {
   if (event.key === 'Enter') {
   
        try {
            string = document.getElementById('input').value
            string = eval(string)
            document.getElementById('input').value = string;
        }
        catch (err) {
            document.getElementById('input').value = "ERROR";
        }
    

   }

})
