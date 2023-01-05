
fetch("class910.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (class910) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let tutor of class910) {
            out += `
			<tr>
				
				<td>${tutor.name}</td>
				<td>${tutor.subject}</td>
				<td>${tutor.phone}</td>
                <td>${tutor.qualification}</td>
				<td>${tutor.place}</td>
				
			</tr>
		`;
        }

        placeholder.innerHTML = out;
    });