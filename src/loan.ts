function checkInputs()
{
    let name     = document.getElementById("name") as HTMLInputElement;
    let number     = document.getElementById("number") as HTMLInputElement;

    if ((name.value != "") && (number.value != ""))
    {
        name.setAttribute("readonly", "readonly");
        number.setAttribute("readonly", "readonly");

        document.getElementById("permission").classList.remove("disabled");
        document.getElementById("login").setAttribute("disabled", "disabled");

        fillPermissionTable(Math.ceil(Math.random() * 3));
    }
    else if (name.value == "")
    {
        name.focus();
    }
    else
    {
        number.focus();
    }
}

function fillPermissionTable(rows : Number)
{
	    let transponderList = randomTransponderList(rows).map(element => ("#" + element.id));

    for (let i = 0; i < rows; i++)
    {
        let tr             = document.createElement("tr");
        let roomList     = randomRoomList(Math.ceil(Math.random() * 4)).map(element => (element.nr + " (" + element.name + ")"));

        for (let j = 0; j < 3; j++)
        {
            let td = document.createElement("td");

            switch (j)
            {
                case 0:
                    let input = document.createElement("input");

                    input.classList.add("permissionRadio");
                    input.setAttribute("type",         "radio");
                    input.setAttribute("name",         "permission");
                    input.setAttribute("value",     "" + i);
                    input.setAttribute("onclick",     "document.getElementById('signature').classList.remove('disabled');");

                    td.appendChild(input);
                    break;
                case 1:
                    td.classList.add("transponderID");
                    td.innerHTML = transponderList[i];
                    break;
                case 2:
                    td.classList.add("rooms");
                    td.innerHTML = roomList.join(", ");
            }

            tr.appendChild(td);
        }

        document.getElementById("permissionTable").appendChild(tr)
    }

}
function submitLoanForm() {
	console.log("submited")
	let name = document.getElementById("name") as HTMLInputElement;
	let number = document.getElementById("number") as HTMLInputElement;
	let permission : number ;

	for (let i = 0; i < document.getElementsByClassName("permissionRadio").length; i++) {
		let permissionRadio = document.getElementsByClassName("permissionRadio")[i] as HTMLInputElement;

		if (permissionRadio.checked) {
			permission = i;
		}
	}

	let a = confirm("Freigabe erteilen?\n\nName: " + name.value +
		"\nMatrikelnummer: " + number.value +
		"\nTransponderID: " + document.getElementsByClassName("transponderID")[permission].innerHTML +
		"\nRäume: " + document.getElementsByClassName("rooms")[permission].innerHTML);
	if(a){
		let tr = new Transponder(document.getElementsByClassName("transponderID")[permission].innerHTML, true)
		transponderList.push(tr)
		statusTable()
	}


}

function resetLoan()
{
	document.getElementById("name").removeAttribute("readonly")
	document.getElementById("number").removeAttribute("readonly")
    document.getElementById("permissionTable").innerHTML = "";

    document.getElementById("permission").classList.add("disabled")
    document.getElementById("signature").classList.add("disabled")
	document.getElementById("submitButton").classList.add("disabled")
	document.getElementById("login").removeAttribute("disabled");
	document.getElementById("permissionTable").innerHTML = "<tr><th></th><th>TransponderID</th><th>Raum</th></tr>";
}