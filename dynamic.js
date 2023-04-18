function run(){
    // console.log("usha")
    var objects = [{
        id : 1,
        Name : "Naveen",
        Branch: "IT",
        Age: 20,
        Gender:"M"
    },{
        id : 2,
        Name : "Vishnu",
        Branch: "IT",
        Age: 20,
        Gender:"M"
    },{
        id : 3,
        Name : "Jayasree",
        Branch: "CSE",
        Age: 20,
        Gender:"F"
    },{
        id : 4,
        Name : "Usha",
        Branch: "IT",
        Age: 20,
        Gender:"F"
    }]
    var index=["Id","Name","Branch","Age","Gender"]
    var table=document.createElement("table")
    for(var i=0;i<index.length;i++){
        var head=document.createElement("th")
        var row=document.createElement("tr")
        head.innerText+=(index[i])
        table.append(head)
        
    }
    table.append(head)
    for(var i = 0;i < objects.length;i++)
    {
        var row=document.createElement("tr")
        for(var j in objects[i]){
            var col=document.createElement("td")
            col.innerText+=(objects[i][j])
            row.append(col)
            table.append(row)
        }
        document.body.append(table)
    }
   
}
    
    