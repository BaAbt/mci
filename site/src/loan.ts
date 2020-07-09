function checkInputs()
{
let name = document.getElementById("name") as HTMLInputElement;
    let number = document.getElementById("name") as HTMLInputElement;

    if ((name.value != "") && (number.value != ""))
    {
        name.setAttribute("readonly", "readonly");
        number.setAttribute("readonly", "readonly");

        document.getElementById("permission").classList.remove("disabled");

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
		let tr 			= document.createElement("tr");
		let roomList 	= randomRoomList(Math.ceil(Math.random() * 4)).map(element => (element.nr + " (" + element.name + ")"));

		for (let j = 0; j < 3; j++)
		{
			let td = document.createElement("td");

			switch (j)
			{
				case 0:
					let input = document.createElement("input");

					input.setAttribute("type", 		"radio");
					input.setAttribute("name", 		"permission");
					input.setAttribute("value", 	i.toString());
					input.setAttribute("onclick", 	"document.getElementById('signature').classList.remove('disabled');");

					td.appendChild(input);
					break;
				case 1:
					td.innerHTML = transponderList[i];
					break;
				case 2:
					td.innerHTML = roomList.join(", ");
			}

			tr.appendChild(td);
		}

		document.getElementById("permissionTable");
	}
}