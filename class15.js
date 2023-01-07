
fetch("class15.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (class15) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let tutor of class15) {
            out += `
            <hr>

            <div class="container">
            <div class="cards">
              
          
              <div class="cards-box">
                <h1 class="cards-title">${tutor.name}</h1>
          
                <div class="cards-content">
                <h3 style="color:blue;text-align:center">${tutor.qualification}</h3>
                <h3>Subject: ${tutor.subject}</h3>
                    <h3>Place: ${tutor.place}</h3>
                    
                    <h4>Minimum expected salary/12 days:${tutor.salary}</h4>
                    <h3>Phone: ${tutor.phone}</h3>
                    </div>
              </div>
          
              <div class="cards-footer">
                
                <a> phone no</a>
                <a href="${tutor.fb}">facebook id link</a>
                <a href="${tutor.email}">Email</a>
                <hr>
              <hr>
              <h3>Guardian Satisfactory Point: ${tutor.rating}</h3>
              </div>
              
            </div>
          </div>



        
    `;
        }

        placeholder.innerHTML = out;
    });