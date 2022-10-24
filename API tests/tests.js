import fetch from "./node_modules/";
 let response= fetch('https://www.demoblaze.com/');
import { assert } from "console";
payload={'sign-username':"tb123",
'sign-password':"tali@123"}
 let req=new XMLHttpRequest();
 req.open("POST",'https://www.demoblaze.com/signup',data=payload)
 req.send();
await  req.open("POST",'https://www.demoblaze.com/login',data=payload)
req.send();
 req.open("GET",'https://www.demoblaze.com/cart')
req.send();
req.onload=()=>{
    if(req.status==200)
    console.log (JSON.parse(req.response));
}

response=response[0];
describe('tests', () => {
   it('checks if num of items is 1',()=>{
    assert.ok(len(data)===1)});
    it('checks if name is Nexus 6',()=>{
        assert.ok(JSON.parse(req.response).title=="Nexus 6")
    })
    it('checks if price is 650',()=>{
        assert.ok(JSON.parse(req.response).price===650)
    })
    it('checks if id is 3',()=>{
        assert.ok(JSON.parse(req.response).id===3)
    })
  });