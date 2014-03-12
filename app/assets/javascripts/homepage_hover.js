$(document).ready(function() {
	if (screen.width <768 || $(document).width()<768) //touch screen devices
	{
		$('.project-item').click(function() {
			$('$this >.project-info').css('display','block');
		});
	}
});