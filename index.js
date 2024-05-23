let value
(function() {
    let carousel = document.querySelector(".carousel");
    fetch(`https://dummyjson.com/products?limit=100`)
        .then(val => {
            if (!val.ok) {
                return alert("invalid");
            } else {
                return val.json();
            }
        })
        .then(vals => {
           
            let val = Math.floor(Math.random() * 100);
            let val_two = Math.floor(Math.random() * 100);
            let val_three = Math.floor(Math.random() * 100);
            carousel.innerHTML = `
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${vals.products[val].images[4]}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${vals.products[val_two].images[2]}" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="${vals.products[val_three].images[1]}" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" style="color:black" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            `;
            return vals;
        })
        .then(vals => {
            let pagination = document.querySelector(".pagination");
            let starting_page=1;
            let ending_page=10;
          
             
               function function_vals()
               { 
                tom_cat(starting_page)
                for (let i = 1; i <= 10; i++) {
                    let li = document.createElement("li");
                    li.classList.add("page-item");
                    let span = document.createElement("span");
                    span.textContent = i;
                    span.classList.add("page-link");
                    li.appendChild(span); 
                    pagination.appendChild(li);
                     span.addEventListener("click",()=>{

                        let currentPage=i;
                        tom_cat(currentPage) 
                        let cards_val=document.querySelector(".cards_val");
                        let filter_item=document.querySelector(".filter_items")
                        let content=document.querySelector(".content")
                        cards_val.style.display="flex"
                        filter_item.style.display="none"
                        content.style.display="block"
                        
                     })
                    }
                   
               }

               function_vals()
          
            
                function tom_cat(page)
                {   
                 value=page
                 
                    let page_show=document.querySelector(".cards_val");
                    let vals_one=document.createElement("vals_one")
                    let vals_two=document.createElement("vals_two")
                    let end_limit=page*10;
                    let start_limit=end_limit-ending_page
                    page_show.innerHTML=''
                    let slice_val=vals.products.slice(start_limit,end_limit)
                    localStorage.setItem('color',JSON.stringify(slice_val))
                   
                 
                  slice_val.forEach((element,index)=>{
                    if(index<5)
                    { 
                    
                     let card=document.createElement("card");
                     card.style.width="20rem"
                     card.classList.add("card")
                     //img 
                     let img_src=document.createElement("img") 
                     img_src.style.width="10rem"
                     img_src.classList.add("card-img-top")
                     let image_content=element.images[0]
                     img_src.setAttribute("src",image_content)
                     card.appendChild(img_src)
                     
                     //card body 
                     let card_body=document.createElement("div")
                     card_body.classList.add("card-body")
                     card.appendChild(card_body)
                     
                     //h5 
                     let heading=document.createElement("h5")
                     heading.classList.add("card-title")
                     heading.innerHTML=`${element.title}` 
                     card_body.appendChild(heading)
                    
                     //card text 
                     let para=document.createElement("p")
                     para.classList.add("card-text")
                     para.innerHTML=`${element.description}`
                     card_body.appendChild(para)
                     //button 
                     let button=document.createElement("a")
                     button.classList.add("btn","btn-primary")
                     button.innerHTML="Buy"
                     card_body.appendChild(button)
                     //final append 
                     vals_one.appendChild(card)
                     page_show.appendChild(vals_one)
                    

                    } 
                    else 
                    {
                        let card=document.createElement("card");
                        card.style.width="20rem"
                        card.classList.add("card")
                        //img 
                        let img_src=document.createElement("img") 
                        img_src.style.width="10rem"
                        img_src.classList.add("card-img-top")
                        let image_content=element.images[0]
                        img_src.setAttribute("src",image_content)
                        card.appendChild(img_src)
                        
                        //card body 
                        let card_body=document.createElement("div")
                        card_body.classList.add("card-body")
                        card.appendChild(card_body)
                       
                        //h5 
                        let heading=document.createElement("h5")
                        heading.classList.add("card-title")
                        heading.innerHTML=`${element.title}` 
                        card_body.appendChild(heading)
                       
                        //card text 
                        let para=document.createElement("p")
                        para.classList.add("card-text")
                        para.innerHTML=`${element.description}`
                        card_body.appendChild(para)
                        //button 
                        let button=document.createElement("a")
                        button.classList.add("btn","btn-primary")
                        button.innerHTML="Buy"
                        card_body.appendChild(button)
                        //final append 
                        vals_two.appendChild(card)
                        page_show.append(vals_two)
   
                    }

        
                     
                  })
              
                    }
                    
                    return vals
                } 
                
            )
        .then(vals => {
            let vals_one=document.createElement("vals_one")
            let finally_val=document.querySelector(".filter_inner")
            let input_val=document.querySelector(".filter_btn") 
            let input=document.querySelector(".input_val")
            let filter_item=document.querySelector(".filter_items")
            let content=document.querySelector(".content") 
           
          
            
            input_val.addEventListener("click",()=>{
                event.preventDefault()
               
                let filter_slice=vals.products.filter(val=>{
                    return val.brand==input.value || val.category==input.value
                    
                })  
                input.value=''
                
                  if(filter_slice.length>0)
                  {  
                     vals_one.innerHTML=''
                    filter_slice.forEach((element,index)=>{
                   
                    filter_item.style.display="block"
                    content.style.display="none"
                    let card=document.createElement("card");
                    card.style.width="20rem"
                    card.classList.add("card")
                    //img 
                    let img_src=document.createElement("img") 
                    img_src.style.width="10rem"
                    img_src.classList.add("card-img-top")
                    let image_content=element.images[0]
                    img_src.setAttribute("src",image_content)
                    card.appendChild(img_src)
                    
                    //card body 
                    let card_body=document.createElement("div")
                    card_body.classList.add("card-body")
                    card.appendChild(card_body)
                    
                    //h5 
                    let heading=document.createElement("h5")
                    heading.classList.add("card-title")
                    heading.innerHTML=`${element.title}` 
                    card_body.appendChild(heading)
                   
                    //card text 
                    let para=document.createElement("p")
                    para.classList.add("card-text")
                    para.innerHTML=`${element.description}`
                    card_body.appendChild(para)
                    //button 
                    let button=document.createElement("a")
                    button.classList.add("btn","btn-primary")
                    button.innerHTML="Buy"
                    card_body.appendChild(button)
                    //final append 
                    vals_one.appendChild(card)
                    if(index<2)
                    finally_val.appendChild(vals_one)
                else 
                {
                   let nano=document.querySelector(".filter_nano")
                   nano.appendChild(vals_one)
                   console.log(filter_item)
                   filter_item.style.display="block"
                  
                    
                    
                }
                
                   
                    
                }) 
                
                  console.log(vals)
              
                  } 
                  else 
                  {
                    filter_item.style.display="none"
                    content.style.display="block"
                    
                   
                  }
                   
              //
            })
            

         return vals       
        })
         .then(val=>{
            console.log(val)
         })
        .catch(val => console.log(val));
})(); 
export {value}