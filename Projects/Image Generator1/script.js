const accessKey = 'XyO_0HFk7B5WmUkviXOfrrCgVauVoWBNLJkdintDSBM';


const inputField = document.getElementById("input-field");
const inputBox = document.getElementById("input-box");
const searchResult = document.getElementById("search-result"); 
const showMoreBtn = document.getElementById("show-more-btn"); 
const icon = document.getElementById("icon");
const body = document.querySelector('body'); 

let keyword = '';
let page = 1;

async function searchImages() {
     keyword = inputBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
     if(page == 1){
        searchResult.innerHTML = '';
     }

    results.map((result)=>{
      const image = document.createElement('img')
      image.src = result.urls.small;
      const imagelink = document.createElement('a');
      imagelink.href = result.links.html;
      imagelink.target = "_blank";
      imagelink.appendChild(image);
      searchResult.appendChild(imagelink)
    })
    showMoreBtn.style.display = "block";
}

inputField.addEventListener("submit",(e)=>{
   e.preventDefault();
   let page = 1;
   searchImages();
})


showMoreBtn.addEventListener('click',()=>{
    page++;
    searchImages();
})

icon.addEventListener('click',()=>{
   const iconClick= body.classList.toggle('dark');
   if(iconClick){
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
   }else{
    icon.classList.add('fa-moon')
   }
})