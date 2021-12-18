//xu ly chuoi 
function trim(chuoi){
    //Cat khoang trang o dau chuoi
    str= chuoi
    i=0
    while(chuoi.charCodeAt(i)==32){
        str=chuoi.substr(i+1, chuoi.length-(i+1))
        i+=1
    }
    //Cat khoang trang o cuoi chuoi
    str2=str
    i=str.length-1
    while(chuoi.charCodeAt(i)==32)
    {
        str2=str.substr(0,i)
        i-=1
    }
    return str2

}
//xu ly so
function la_so(so) {
    if (isNaN(parseInt(so)))
        return false
    else
        return true


}
function ten_thu(d) {
    switch (d.getDay()) {
        case 0:
            str = "Chủ nhật"
            break
        case 1:
            str = "Thứ Hai"
            break
        case 2:
            str = "Thứ Ba"
            break
            case 3:
            str = "Thứ Tư"
            break
            case 4:
            str = "Thứ Năm"
            break
            case 5:
            str = "Thứ Sáu"
            break
            case 6:
            str = "Thứ Bảy"
            break
    }
    return str
}