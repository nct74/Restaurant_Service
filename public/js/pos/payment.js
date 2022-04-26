function openCity( cityName) {
    for(var i = 0 ; i < 3 ; i++){
        var setdata = document.getElementsByClassName("PaymentMethod")[i];
        setdata = setdata.firstChild;
        setdata = setdata.firstChild;
        setdata.setAttribute("style", "background-color: white")
    }

    var ele = document.getElementsByClassName("PaymentMethod")[cityName-1];
    ele = ele.firstChild;
    ele = ele.firstChild;
    ele.setAttribute("style", "background-color: #ccc")
    // console.log(cityName);

    if(cityName == "1"){
        document.getElementsByClassName("Credit")[0].style.display = 'block';
        document.getElementsByClassName("ewallet")[0].style.display = 'none';
        document.getElementsByClassName("cash")[0].style.display = 'none';
    }
    if(cityName == "2"){
        document.getElementsByClassName("Credit")[0].style.display = 'none';
        document.getElementsByClassName("ewallet")[0].style.display = 'block';
        document.getElementsByClassName("cash")[0].style.display = 'none';
    }
    if(cityName == "3"){
        document.getElementsByClassName("Credit")[0].style.display = 'none';
        document.getElementsByClassName("ewallet")[0].style.display = 'none';
        document.getElementsByClassName("cash")[0].style.display = 'block';
    }
    
}