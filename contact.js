function save(){
const input=document.getElementById("name").value.trim();
const input2=document.getElementById("email").value.trim();
const input3=document.getElementById("message").value.trim();
if(localStorage.getItem("data")==null){
    localStorage.setItem("data","[]");
}
const output=JSON.parse(localStorage.getItem("data"))
output.push(input)
output.push(input2)
output.push(input3);
localStorage.setItem("data",JSON.stringify(output));
}