var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData =readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//retrive the data 
function readFormData(){
    var formData = {};
    formData["FirstName"] = document.getElementById("FirstName").value;
    formData["LastName"] = document.getElementById("LastName").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Contact"] = document.getElementById("Contact").value;
    return formData;    
}

//insert record function 
function insertNewRecord(data){
    var table=document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
        cell1.innerHTML=data.FirstName;
    var cell2=newRow.insertCell(1);
        cell2.innerHTML=data.LastName;  
    var cell3=newRow.insertCell(2);
        cell3.innerHTML=data.Email;
    var cell4=newRow.insertCell(3);
        cell4.innerHTML=data.Contact;  
    var cell5=newRow.insertCell(4);
       cell5.innerHTML = `<button onClick=`onEdit(this)`>Edit</button>  <button onClick=`onDelete(this)`>Delete</button>`;
}

// Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById(`FristName`).value=selectedRow.cells[0].innerHTML;
    document.getElementById(`LastName`).value=selectedRow.cells[1].innerHTML;
    document.getElementById(`Email`).value=selectedRow.cells[2].innerHTML;
    document.getElementById(`Contact`).value=selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML= formData.FirstName;
    selectedRow.cells[1].innerHTML= formData.LastName;
    selectedRow.cells[2].innerHTML= formData.Email;
    selectedRow.cells[3].innerHTML= formData.Contact;
}

//Delete the data
function onDelete(td){
    if(confirm(`Do you want to delete this record`)){
        row=td.parentElement.parentElement;
        document.getElementById(`storeList`).deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset function
function resetForm(){
    document.getElementById(`FirstName`).value= ``;
    document.getElementById(`LastName`).value= ``;
    document.getElementById(`Email`).value= ``;
    document.getElementById(`Contact`).value= ``;

}