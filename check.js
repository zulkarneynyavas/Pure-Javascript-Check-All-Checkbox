function SelectAll() {
	var a = document.form,
		b = a.elements['CheckBox'],
		c = b.length,
		d,
		e = a.elements['CheckAll'];
	for (d=0; d<c; d++) {
		if (e.checked == true) {
			b[d].checked = true;
		} else {
			b[d].checked = false;
		}
	}
}
