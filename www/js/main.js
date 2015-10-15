jQuery(document).ready(function() {
	TweenMax.to('#rect', 1, {
		transform: 'scale(3) rotate(180deg)',
		backgroundColor:'green',
		left: 200,
		repeat: -1,
		ease: Quart.easeOut
	});

	TweenMax.fromTo('#main span', 10, {
		transform: 'scaleX(0)',
		transformOrigin: 'right center'
	},
	{
		transform: 'scaleX(1)',
		ease: Quart.easeOut
	});
});