let loadCookieBtn = document.getElementById('load-cookie-btn');
let cookieStrField = document.getElementById('cookie-field');

// let FBLoginHandler = function(response) {
    
// }

loadCookieBtn.onclick = function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        let tab = tabs[0];
        // chrome.cookies.getAll({url: tab.url}, function(cookies) {
        //     console.log(cookies);
        // });
        chrome.tabs.sendMessage(tab.id, {task: 'FB_LOGIN'}, function (response){
            //console.log({succeeded: response.succeeded});
            if(response.succeeded) {
                // read cookie.

                chrome.cookies.getAll({url: tab.url}, function (cookies) {
                    console.log(cookies);
                    if(cookies.length()>0)
                        cookieStrField.value = cookies[0].name+cookies[0].value;
                });
                // signout
                chrome.tabs.sendMessage(tab.id, {task: 'FB_SIGNOUT'})
            }
        });
    })
}
