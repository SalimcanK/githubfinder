// Init class from github.js
const github = new Github;

// Init class from ui.js
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {

    // Get input text
    const userText =  e.target.value;

    if(userText !== '') {

        // Make http request
        github.getUser(userText)
          .then(data => {
              if(data.profile.message === 'Not Found') {
                  
                // Show alert
                ui.showAlert('User not found', 'alert alert-danger');

              } else {

                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
              }
          })
    
    } else {
        
        // Clear Profile
        ui.clearProfile();
    }
})