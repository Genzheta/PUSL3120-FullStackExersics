window.onload = function() {

    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {

        if (this.readyState === 4 && this.status == 200) {

            let elem = document.getElementById("spnNum");

            elem.innerHTML = this.responseText;

        }

    };

    request.open("GET", "http://localhost:82/", true);

    request.send();

}



