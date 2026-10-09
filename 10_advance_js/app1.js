let url = "https://catfact.ninja/fact";
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", async () => {
    let fact = await getFacts();
    let p = document.querySelector("#result");
    p.innerText = fact;
});

async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        console.log("error - ", e);
        return "No Fact Found";
    }
}


let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#dogImg");
    img.setAttribute("src", link);
    console.log(link);
});

async function getImage() {
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }
    catch(e){
        console.log("error - ", e);
        return "/";
    }
}
