const itemInput = document.getElementById('itemInput');

const addItem = document.getElementById('addItem');

const items = document.getElementById('Items')


const itemsList =  JSON.parse(localStorage.getItem("itemsList")) || [];

addItem.addEventListener('click', function(){
    
    

    itemsList.push(itemInput.value)
    
    renderItems(itemsList)
    
    
    
    itemInput.value = '';

    saveItem()

   
    
})

function renderItems(){
    // items.innerHTML = null;
    let listItems = '';

    for(const[idx, item] of Object.entries(itemsList)){
        listItems += `<p> ${item} <button class='delete-btn' data-index = ${idx}>Delete</button></p> `
        

        
        // const container = document.createElement('div')
        // container.style.marginBottom = "10px";
        // const text = document.createElement('p');
        // text.textContent = item;

        // const button = document.createElement('button')
        // button.textContent = 'Delete';
        

        // container.appendChild(text)
        // container.appendChild(button)

       


        // items.appendChild(container)




    }

    
    items.innerHTML = listItems
    const deleteButton = document.querySelectorAll('.delete-btn');

    deleteButton.forEach(button => {
        button.addEventListener('click', function(){
            const index = this.getAttribute('data-index')
            removeItem(index)
        })
        
    });


    
    


}
renderItems()




function removeItem(idx){

    itemsList.splice(idx,1)
    renderItems()
    saveItem()

}

function loadItems(){
//   console.log(JSON.parse(localStorage.getItem(itemsList)))
 
  
   
    renderItems()
    


}

function saveItem(){
   const stringItem =   JSON.stringify(itemsList)
  console.log(localStorage.setItem("itemsList" , stringItem)) 
   renderItems()
   

}
 

console.log(itemsList)

document.addEventListener('DOMContentLoaded', loadItems)






