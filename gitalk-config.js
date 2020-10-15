var gitalk = new Gitalk({
    "clientID": "4caefe2b5a9c4a35d33a",
    "clientSecret": "7b25e669b5cbe71aed75faa760f2e785f7b6b448", 
    "repo": "aweiloveandroid.github.io",
    "owner": "AWeiLoveAndroid", 
    "admin": ["AWeiLoveAndroid"], 
    "id": window.location.pathname,
    "distractionFreeMode": false
});
gitalk.render('gitalk-container');