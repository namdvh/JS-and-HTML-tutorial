//Hàm xử lý chuỗi
function trim(chuoi)
{	str =chuoi
	//cắt phần đầu
	i = 0 
	while (chuoi.charCodeAt(i)==32)
	{	str = chuoi.substr(i+1,chuoi.length - (i+1))
		i += 1
	}
	//cắt phần cuối
	str2 = str
	i = str.length - 1 
	while (str.charCodeAt(i)==32)
	{	str2 = str.substr(0, i)
		i -= 1
	}
	return str2
}
//Hàm kiểm tra
function la_so(so)
	{	if (isNaN(parseInt(so)))
		{	return false}
		else
			{return true}
	}
//Hàm xử lý số
function lam_tron(so,thap_phan)
{
	Num = so;
	Num *= Math.pow(10,thap_phan);
	Num = Math.round(Math.abs(Num));	//làm tròn số với số nguyên gần nhất
	Num /= Math.pow(10,thap_phan);
	if (so <0)
		Num *=-1;
	return Num;
}	
function dinh_dang_so(nso, nthap_phan, bngoac_don,bdau_phay,sdon_vi)
/**********************************************************************
	Tham số:
		nso : Số được định dạng 
		nthap_phan : Số thập phân, đứng sau dấu thập phân
		bngoac_don - true / false : dùng dấu ngoặc đơn cho các số âm?
		bdau_phay : dùng dấu phẩy để phân cách hàng ngàn?
 		sdon_vi : Đơn vị tiền tệ
	Giá trị trả về:
		Là 1 con số đã được định dạng
 **********************************************************************/
{ 	
    if (isNaN(parseInt(nso))) return "NaN";

	var so_tam = nso;
	// Làm tròn số
	so_tam = Math.round(so_tam, nthap_phan)	
	// Tạo 1 đối tượng chuỗi để định dạng
	var chuoi_so = new String(so_tam);
	// Đặt vị trí dấu phẩy
	if (bdau_phay && (nso >= 1000 || nso <= -1000))
	{
		var vt_cham = chuoi_so.indexOf(".");
		if (vt_cham < 0)
			vt_cham = chuoi_so.length;

		vt_cham -= 3;
		while (vt_cham >= 1)
		{
			chuoi_so = chuoi_so.substring(0,vt_cham) + "," + chuoi_so.substring(vt_cham,chuoi_so.length)
			vt_cham -= 3;
		}		
	}
	// Đặt dấu ngoặc () cho các số âm
	if (bngoac_don && nso < 0)
		chuoi_so = "(" + chuoi_so.substring(1,chuoi_so.length) + ")";
	// Thêm đơn vị tiền tệ
	if (sdon_vi != "")
		chuoi_so = chuoi_so + " " + sdon_vi;
	return chuoi_so;		// trả về chuỗi số được định dạng
}	

//Hàm xử lý ngày	
function ten_thu(d)
	{	
		thu =new Arrray("Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy")
		return thu[d.getDay()]
	}
function ten_thang(d)
	{	
		th =new Arrray("Tháng một","Tháng hai","Tháng ba","Tháng tư","Tháng năm","Tháng sáu","Tháng bảy","Tháng tám","Tháng chín","Tháng mười","Tháng muời một","Tháng mười hai")
		return th[d.getMonth()]
	}
