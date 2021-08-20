/*n = '12345';
console.log(n.split("").reverse().join(""))*/

function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(reverse_a_number(23456));
