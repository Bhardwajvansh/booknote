let inp1=document.getElementById('input1')
let inp2=document.getElementById('input2')
let inp3=document.getElementById('input3')
let inp4=document.getElementById('input4')


document.getElementById('btn1').addEventListener('click', ()=>{
    
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    
    if(inp1.value=="" || inp2.value==""){
        alert("enter details First!!!")
    }
    if (!inp2.value.match(regex)) {
        alert("Please use valid URL!!");
        inp2.value=""
      }
    else{
        var bookmark ={
            name : inp1.value,
            url : inp2.value
        }
        if(localStorage.getItem('books')===null){
            var books= [];
            books.push(bookmark);
            localStorage.setItem('books',JSON.stringify(books));
        }
        else{
            let book=JSON.parse(localStorage.getItem('books'))
            book.push(bookmark);
            localStorage.setItem('books',JSON.stringify(book)); 
        }
        inp1.value=""
        inp2.value=""
    }
    fetchbook();
    // local storage
    // localStorage.setItem('key','value') = to put key value in the local storgae
    // localStorage.getItem('key') = to get hthe value from the localstorage
    // localStorage.removeItem('key') = to remove the item from the locaslstorage
})

document.getElementById('btn2').addEventListener('click', ()=>{
    
    if(inp3.value=="" && inp4.value==""){
        alert("enter details first!!!")
    }
    else{
        var note ={
            name : inp3.value,
            content : inp4.value
        }
        if(localStorage.getItem('notes')===null){
            let not=[]
            not.push(note);
            localStorage.setItem('notes',JSON.stringify(not));
            inp3.value=""
            inp4.value=""
        }
        else{
            let not=JSON.parse(localStorage.getItem('notes'));
            not.push(note);
            localStorage.setItem('notes',JSON.stringify(not));
            inp3.value=""
            inp4.value=""
        }
    }
    fetchnote();
})

// deleting the bookmark

function deletebook(ur) {
    let data=JSON.parse(localStorage.getItem('books'));
    for(var i=0;i<data.length;i++){
        if(data[i].url==ur) {data.splice(i,1)} 
    };
    localStorage.removeItem('books')
    localStorage.setItem('books',JSON.stringify(data));
    fetchbook();
}

function deletenote(con) {
    let data=JSON.parse(localStorage.getItem('notes'));
    for(var i=0;i<data.length;i++){
        if(data[i].content==con) {data.splice(i,1)} 
    };
    localStorage.removeItem('notes')
    localStorage.setItem('notes',JSON.stringify(data));
    fetchnote();
}
// fetchinh data from the localstorage

function fetchbook(){
    let data=JSON.parse(localStorage.getItem("books"));
    let booktitle=document.getElementById('book-mark');
    document.getElementById('main').style.display="flex";
    booktitle.innerHTML="";
    if(data!=null){
        data.forEach(ele => {
            var nam = ele.name; 
            var con = ele.url; 
            booktitle.innerHTML+='<div id="bookmark">'+
                                 '<h3 id="booktitle">'+nam+
                                 '</h3>'+
                                 '<div>'+
                                 '<a id="visit" class="visit btn" href="'+con+'" target="blank">Visit</a>'+
                                 '<button id="delete1" onclick="deletebook(\''+con+'\')" class="btn">DELETE</button>'+
                                 '</div>'+
                                 '</div>';
        });
    }
}

function fetchnote(){
    let data=JSON.parse(localStorage.getItem("notes"));
    let notetitle=document.getElementById('note-mark');
    document.getElementById('main').style.display="flex";
    notetitle.innerHTML="";
    if(data!=null){
        data.forEach(ele => {
            var nam = ele.name; 
            var con = ele.content; 
            notetitle.innerHTML+='<div id="bookmark">'+
                                 '<h3 id="notetitle">'+nam+
                                 '</h3>'+
                                 '<p id="notecontent">'+con+'</p>'+
                                 '<button id="delete2" onclick="deletenote(\''+con+'\')" class="btn">DELETE</button>'+
                                 '</div>';
        });
    }
}

