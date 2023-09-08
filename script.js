let btn1 = document.getElementsByClassName("btn")[0];

btn1.addEventListener("click", getdog);

async function getdog() {
  const dogs = async () => {
    const res = await fetch("https://random.dog/woof.json");
    const data = await res.json();
    return data;
  };
  const d = await dogs();
  let dd = d.url;
  let img2 = document.getElementsByClassName("result")[2];
  img2.style.backgroundImage = "url(" + dd + ")";
}