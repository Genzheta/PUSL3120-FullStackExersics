window.onload = function() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status == 200) {
      let elem = document.getElementById("divMain");
      let customers = JSON.parse(this.responseText);
      let rows = "";
      for (i=0; i<customers.length; i++) {
        rows += "<tr>"
          + "<td>" + customers[i].surname + "</td>";
      }
      elem.innerHTML = "<table>" + rows + "</table>";
    }
  };
  request.open("GET", "http://localhost:82/", true);
  request.send();
}
