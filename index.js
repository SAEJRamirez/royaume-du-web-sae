let checkbox = document.getElementById("checkbox")


document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
    let formData = new FormData(form)
    let clientEmail = Object.fromEntries(formData).email

    if(checkbox.checked) {
        if(clientEmail !== "") {
            addClient({email: clientEmail})
        }
    } else {
        Toastify({
            text: "Merci d'accepter les conditions générales",
            duration: 3000,
            position: "center",
            offset: {
                y: 10
            },
            style: {
                background: "linear-gradient(to right, #ed6767, #ff0000)"
            }
        }).showToast()
    }

})

async function addClient(data) {
    try {
        const response = await fetch("http://localhost:8000/api/clients", {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if(!response.ok) {
            Toastify({
                text: "Un problème est survenu. Veuillez réessayer",
                duration: 3000,
                position: "center",
                offset: {
                    y: 10
                },
                style: {
                    background: "linear-gradient(to right, #ed6767, #ff0000)"
                }
            }).showToast()
            throw new Error("Serveur ne répond pas")
        } 

        Toastify({
            text: "Merci! Nous vous contacterons au plus vite.",
            duration: 3000,
            position: "center",
            offset: {
                y: 10
            }
        }).showToast()

        document.getElementById("email").value = ""
        checkbox.checked = false
        return response.json()

    } catch(err) {
        Toastify({
            text: "Un problème est survenu. Veuillez réessayer",
            duration: 3000,
            position: "center",
            offset: {
                y: 10
            },
            style: {
                background: "linear-gradient(to right, #ed6767, #ff0000)"
            }
        }).showToast()
        console.log(err)
    }

}

