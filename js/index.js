//load all data information
const loadData=async()=>{
   const res=await fetch('https://openapi.programming-hero.com/api/ai/tools')
  const data=await res.json()
  const allData=await data.data.tools
  showAllSite(allData);
};
//show all data
const showAllSite=(data)=>{
    // console.log(data);
    data.forEach(allInformation => {
        // console.log(allInformation);
        const cardContainer=document.getElementById('card-container')
        const card=document.createElement('div')
        card.innerHTML=`
        <figure class="px-10 pt-10">
        <img src="${allInformation?.image}" alt="" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">${allInformation.name}</h2>
        <p class="my-8">${allInformation.description}</p>
        <p><span class="text-black font-bold my-5">Features :</span>${allInformation.features}</p>
        <small class="font-light italic my-8">${allInformation.published_in}</small>
        <div class="card-actions">
          <button onclick="showAllButton('${allInformation.id}')" class="btn btn-primary">Show Details</button>
        </div>
      </div>
        `
        cardContainer.appendChild(card)
    });

}

//show all Button
const showAllButton=async(id)=>{
    // console.log(id);
    my_modal_3.showModal()
    const res= await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    const data=await res.json()
    const oneSiteData=await data.data
    showModal(oneSiteData)
}
//show modal
const showModal=(modalData)=>{
    console.log(modalData);
    const modalContainer=document.getElementById('modal-deatils')
    modalContainer.textContent=''
    modalContainer.innerHTML=`
    <img class="my-4" src="${modalData.image_link[1]}" alt="">
    <h3 class="font-bold text-lg text-center">${modalData.tool_name}</h3>
    <p class="py-4">${modalData.description}</p>
    <p class="py-4 font-bold text-center">${modalData.integrations}</p>
    <p class="py-4 text-center"><span class="text-black font-bold">Accuracy :</span> ${modalData.accuracy.description}<br/><span class="text-black font-bold">Score : </span>${modalData.accuracy.score}</span></p>
    <p class="py-4 text-center"><span class="text-black font-bold">Features :</span> ${modalData.features}<br/><span class="text-black font-bold">1 : </span>${modalData.features.feature_name}</span></p>
    `
    // modalContainer.appendChild(div)
}
loadData()