(function () {
    var form = document.querySelector("form");
    var children = form.children;
    var loading_icon = children[3].querySelector("svg");

    var validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var name = children[0].value.trim();
        var email = children[1].value.trim();
        var message = children[2].value.trim();

        if (name && email && message) {
            if (validateEmail(email)) {
                loading_icon.classList.remove("hidden");
                var data = {
                    name,
                    email,
                    message,
                };

                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        alert("Message was sent successfully!");
                        loading_icon.classList.add("hidden");
                        form.reset();
                    }
                };

                xhr.open("POST", "https://8immieswmf.execute-api.us-east-2.amazonaws.com/contact", true);
                xhr.setRequestHeader("Content-type", "application/json");
                xhr.send(JSON.stringify(data));
            } else {
                alert("Please enter a valide email!");
            }
        } else {
            alert("All fields are required!");
        }
    });
})();
