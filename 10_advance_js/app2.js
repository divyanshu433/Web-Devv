let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    let clgArr = await getClg(country); 
    console.log(clgArr);

    show(clgArr);
});

function show(clgArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of clgArr){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.append(li);
    }
}

async function getClg(country) {
    try{
        let res = await axios.get(url + country);
        return res.data;
    }
    catch(err){
        console.log(err);
        return [];
    }
};