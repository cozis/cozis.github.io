
function set_textareas_height()
{
	let textareas = document.querySelectorAll("textarea[disabled]")

	for (textarea of textareas)
		{
			textarea.style.height = "5px";
			textarea.style.height = textarea.scrollHeight + "px";
		}
}

set_textareas_height()
window.onresize = set_textareas_height