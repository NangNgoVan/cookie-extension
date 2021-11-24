//console.log('content script.');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.task == 'FB_LOGIN') {
        let usernameInput = document.getElementById('email');
        let passInput = document.getElementById('pass');
        let loginBtn = document.getElementsByName('login')[0];

        if(usernameInput) usernameInput.value = "0967963970";
        if(passInput) passInput.value = "Nang12345678";
        if(loginBtn) loginBtn.click();

        sendResponse({succeeded: true, task: request.task});
    }
    else if (request.task == 'FB_SIGNOUT') {
        console.log('fb logout');
        sendResponse();
    }
    //return true;
})
