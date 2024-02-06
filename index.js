function add(a, b) {
	return a + b
}

function multi (a, b) {
	return a * b
}

// 하나일 땐 export, 복수일 땐 exports
module.exports = {
	add,
	multi
}
