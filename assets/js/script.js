/**
 * To Get Group or Channel Info
 * Using Telegram API
 * By Fineshop Design
 **/

/* Telegram Bot Api Token (sensitive), don't share publicly */
var token = '5480139273:AAGW4u3oloPjJlVn1vpnWJq6bB_mdM_afTw';

/* chat_id for the group or channel you want to track, i.e. @group, @channel or -1001615491316 */
var chat_id = '@Elcasa1';

/* HTTP Request Function */
function httpRequest(URL, Method) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open(Method, URL, false);
  xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

/* Sending a request to Telegram API to get chat object of a particular channel or group */
function getChatDetails() {
  return httpRequest(`https://api.telegram.org/bot${token}/getChat?chat_id=${chat_id}`, 'GET');
}

/* Parsing Chat Object from result key */
var chatObj = getChatDetails()['result'];
console.log(chatObj);

/* Sending a request to Telegram API to get number of members in a particular group or channel */
function getMemberCount() {
  return httpRequest(`https://api.telegram.org/bot${token}/getChatMembersCount?chat_id=${chat_id}`, 'GET');
}

/* Parsing Members Number from result key */
var members = getMemberCount()['result'];
console.log(members);

/* Writing in HTML */
document.getElementById('telegram-info').innerHTML = `<div class='container'>
  <div class='box'>
    <span>Title:</span>
    <span>${chatObj.title}</span>
  </div>
  <div class='box'>
    <span>Type:</span>
    <span>${chatObj.type}</span>
  </div>
  <div class='box'>
    <span>Username:</span>
    <span>@${chatObj.username}</span>
  </div>
  <div class='box'>
    <span>Chat ID:</span>
    <span>${chatObj.id}</span>
  </div>
  <div class='box'>
    <span>Description:</span>
    <span>${chatObj.description.replaceAll('\n', '<br>')}</span>
  </div>
  <div class='box'>
    <span>Followers:</span>
    <span>${members}</span>
  </div>
</div>`;