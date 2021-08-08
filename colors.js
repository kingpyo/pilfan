var Body = {
    setcolor : function(color){
    document.querySelector('body').style.color = color;    
    },
    setbackgroundcolor : function(color){
    document.querySelector('body').style.backgroundColor = color;    
    }
}

    var Link = {
    setcolor : function(color){
    var alist = document.querySelectorAll('a')
    var i = 0;
    while(i < alist.length){console.log(alist[i])
     alist[i].style.color = color;
    i = i + 1;
        }
    }
}

    function nightdayhandler(self){
    if(self.value === 'Night'){
    Body.setbackgroundcolor('black');
    Body.setcolor('white');
    self.value = 'Day';
    Link.setcolor("white")
    }
    

    else{
    Body.setbackgroundcolor('white');
    Body.setcolor('black');
    self.value = 'Night';
    Link.setcolor("black")
    }
}