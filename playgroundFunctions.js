// const itachi = {
//   posts: [],
//   friends: ["5dc365955746eb3778a76539"],
//   chats: [
//     "5dc370eb0689e90ab425e0e8",
//     "5dc371877667c40d94472d80",
//     "5dc371f1dcc11f42c80b4798",
//     "5dca4d1940ab631920c0ada4",
//     "5dca4dcb756ea84aa0e15901",
//     "5dca4dec756ea84aa0e15902",
//     "5dca4e3f756ea84aa0e15903",
//     "5dca543a729ac31f786d7357",
//     "5dca5493729ac31f786d7358",
//     "5dcb4d951d6dc606ec4e55c4",
//     "5dcb4db7e057d641b02286c8",
//     "5dcb4e00ba74940d6ce426eb",
//     "5dcb4f5a1fd1ca18e098927f",
//     "5dcb4fc39f36df0d7c9e8584",
//     "5dcb5899f1a3ba057c3147c6",
//     "5dcb58bc252d683c38dad131",
//     "5dcb58de252d683c38dad132",
//     "5dcb58f9fca1790788ca8f41",
//     "5dcb5a2c7b385c4548a6c075",
//     "5dcb5c76ff0b1944ac259a9d",
//     "5dcb5c9b0457b53aa04b156f",
//     "5dcb5d4b6206104d9ca80361",
//     "5dcb5f04df6a05194c627788",
//     "5dcb5f1683a7c81e00ee13be",
//     "5dcb5f32cb9c382e44ef9ff2",
//     "5dcb5f78457dcb4ec00da550",
//     "5dcb5fad7bf8da52a0cbec98",
//     "5dcb5fb9fa43a5214c56c75f",
//     "5dcb5fc54a6fd6082ce79b3c",
//     "5dcb5ffc5f60170654066a40"
//   ],
//   _id: "5dc3658d5746eb3778a76538",
//   email: "itachi@aol.com",
//   username: "itachi",
//   password: "$2a$12$nLG5AIKb/vYsErnmofKaT.E9SAWmgPbejlbSpK/tmvG/tNSu/rrnS",
//   createdAt: "2019-11-07T00:30:05.321Z",
//   __v: 31
// };

// const gaara = {
//   posts: [
//     "5dc37a480da1e23fa40305a2",
//     "5dca1ebb01220139dc9d602d",
//     "5dca209901220139dc9d602f",
//     "5dca20a501220139dc9d6030",
//     "5dca20bbdb01bb32c86b7528",
//     "5dca20db0fa60f30cc46aca9",
//     "5dca20fe0fa60f30cc46acaa",
//     "5dca2b95662bf51e98a42ce6"
//   ],
//   friends: ["5dc3658d5746eb3778a76538"],
//   chats: [
//     "5dc370eb0689e90ab425e0e8",
//     "5dc371877667c40d94472d80",
//     "5dc371f1dcc11f42c80b4798",
//     "5dca4d1940ab631920c0ada4",
//     "5dca4dcb756ea84aa0e15901",
//     "5dca4dec756ea84aa0e15902",
//     "5dca4e3f756ea84aa0e15903",
//     "5dca543a729ac31f786d7357",
//     "5dca5493729ac31f786d7358",
//     "5dcb4d951d6dc606ec4e55c4",
//     "5dcb4db7e057d641b02286c8",
//     "5dcb4e00ba74940d6ce426eb",
//     "5dcb4f5a1fd1ca18e098927f",
//     "5dcb4fc39f36df0d7c9e8584",
//     "5dcb5899f1a3ba057c3147c6",
//     "5dcb58bc252d683c38dad131",
//     "5dcb58de252d683c38dad132",
//     "5dcb58f9fca1790788ca8f41",
//     "5dcb5a2c7b385c4548a6c075",
//     "5dcb5c76ff0b1944ac259a9d",
//     "5dcb5c9b0457b53aa04b156f",
//     "5dcb5d4b6206104d9ca80361",
//     "5dcb5f04df6a05194c627788",
//     "5dcb5f1683a7c81e00ee13be",
//     "5dcb5f32cb9c382e44ef9ff2",
//     "5dcb5f78457dcb4ec00da550",
//     "5dcb5fad7bf8da52a0cbec98",
//     "5dcb5fb9fa43a5214c56c75f",
//     "5dcb5fc54a6fd6082ce79b3c",
//     "5dcb5ffc5f60170654066a40"
//   ],
//   _id: "5dc365955746eb3778a76539",
//   email: "gaara@aol.com",
//   username: "gaara",
//   password: "$2a$12$cEdiU8b9Tot/rsqq1YoGUeinUhNrdlJQj8YsNHGKTL24y.1wcro6e",
//   createdAt: "2019-11-07T00:30:13.622Z",
//   __v: 39
// };

// function checkChat(gaara, itachi) {
//   let found = false;
//   for (chatid of gaara.chats) {
//     if (
//       itachi.chats.filter(friendChatId => friendChatId === chatid).length > 0
//     ) {
//       found = true;
//     }
//   }
//   return found;
// }

// const checked = checkChat(gaara, itachi);
// console.log(checked);

// const getMe = {
//   friends: [
//     { id: "5dc3658d5746eb3778a76538", username: "itachi", __typename: "User" }
//   ],
//   id: "5dc365955746eb3778a76539",

//   username: "gaara",
//   __typename: "User"
// };

// console.log(getMe.friends.length);



const users = [[{id: "5df9800873bc0841bc804a07", __typename: "User"},
 {id: "5e012806059642283805ba65", __typename: "User"}], 
 
 [{id: "5df9800873bc0841bc804a07", __typename: "User"},
 {id: "5e012806059642283805ba65", __typename: "User"}]]

const usersArray = [{id: "5df9800873bc0841bc804a07", __typename: "User"},
 {id: "5e012806059642283805ba65", __typename: "User"}]
 
const newArray = usersArray.map(user => user.id)
const [{id}, rest] = usersArray
console.log(id, rest);
console.log(newArray);
const userId = "5e012806059642283805ba65"
 
let list = []
function check(users){

  users.forEach(user => user.forEach(homie =>  list.push(homie.id)))
  console.log(list);
  return list
}
console.log(list);
console.log(check(users))


// function add(){
//   list.push(userId)
//   return list
// }

// console.log(add());


const chats = [{id: "5e0532e84450d74af439297c", 

users: [{id: "5df9800873bc0841bc804a07", __typename: "User"},

{id: "5e012806059642283805ba65", __typename: "User"}] ,
 __typename: "Chat"}, 
 {id: "5e0532e84450d74af439297c", users: [{id: "5df9800873bc0841bc804a07", __typename: "User"},

 {id: "5e012806059642283805ba65", __typename: "User"}], __typename: "Chat"}]

 function loop(chats){
   for(let chat of chats){
     console.log(chat.users);
     if(chat.users[0].id || chat.users[1].id === userId){
       return chat.id
     }
   }
 }

 console.log(loop(chats));
 