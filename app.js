const submitBtn = document.querySelector("#action-div > button");
const form = document.querySelector("form");
const newPassword = document.querySelector("#password")
const reTypedPassword = document.querySelector("#confirm-password")

submitBtn.addEventListener("click", (e) => {
	confirmPassword(newPassword.value, reTypedPassword.value)
	form.classList.add("submitted")
})


function confirmPassword(firstInput, secondInput) {
	if (firstInput === secondInput) {
		return true;
	}
	else {
		newPassword.value = ""
		reTypedPassword.value = ""
		alert("Passwords do not match")
		return false;
	}
}
