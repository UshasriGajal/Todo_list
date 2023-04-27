
count=1
function add(){
   
    var x=document.getElementById("input").value 
    // x.setAttribute("id","value_"+count)
    // document.body.append(x)
    var span=document.createElement("span")
    span.setAttribute('id','spanItem_'+count)

    var div=document.createElement("div")
    div.setAttribute("id","divItem_"+count)
    div.setAttribute("class","divStyle")
     
    var input=document.createElement("input")
    input.value=x
    input.setAttribute("id","inputItem_"+count)
    input.setAttribute("class","inputStyle")
    input.style.display="none"

    var edit=document.createElement("button")
    edit.innerText="EDIT"
    edit.setAttribute("id","editItem_"+count)
    edit.setAttribute("class","editStyle")
    edit.addEventListener('click',editItem)

    var del=document.createElement("button")
    del.innerText="DELETE"
    del.setAttribute("id","delItem_"+count)
    del.setAttribute("class","delStyle")
    del.addEventListener('click',delItem)
     
    var update=document.createElement("button")
    update.innerText="UPDATE"
    update.setAttribute("id","updateItem_"+count)
    update.setAttribute("class","updateStyle")
    update.style.display="none"
    update.addEventListener('click',updateItem)
    
    var Break=document.createElement("br")
    Break.setAttribute("id","BreakItem_"+count)
    span.append(x)
    div.append(span,input,edit,update,del,Break)
    document.body.append(div,Break)
    
    
    count++
}

function editItem(){
    var currentElement=document.activeElement.getAttribute("id")
    currentId = currentElement.split("_")[1]

    var spanElement = document.getElementById("spanItem_"+currentId)
    spanElement.style.display="none"
    
    var updateElement = document.getElementById("updateItem_"+currentId)
    updateElement.style.display="inline-block"

    var editElement = document.getElementById("editItem_"+currentId)
    editElement.style.display="none"

    var inputElement = document.getElementById("inputItem_"+currentId)
    
    inputElement.style.display="inline-block"
    console.log(currentId)

}

function delItem(){
    var currentElement=document.activeElement.getAttribute("id")
    currentId = currentElement.split("_")[1]
    var divElement = document.getElementById("divItem_"+currentId)
    divElement.remove()
    var BreakElement = document.getElementById("BreakItem_"+currentId)
    BreakElement.remove()
    
}
function updateItem(){
    var currentElement=document.activeElement.getAttribute("id")
    currentId = currentElement.split("_")[1]
   
    var newElement = document.getElementById("inputItem_"+currentId).value
    var spanElement = document.getElementById("spanItem_"+currentId)
    spanElement.innerText=newElement
    spanElement.style.display="inline-block"
    // newElement.style.display="inline-block"
    var inputElement = document.getElementById("inputItem_"+currentId)
    inputElement.style.display="none"
    var editElement = document.getElementById("editItem_"+currentId)
    editElement.style.display="inline-block"
    
    var delElement = document.getElementById("delItem_"+currentId)
    delElement.style.display="inline-block"
    
    var updateElement = document.getElementById("updateItem_"+currentId)
    updateElement.style.display="none"
   
    
}


// edit function


