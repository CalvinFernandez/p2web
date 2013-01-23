var currentDisplay 	= "#intro";
var projectID 		= "#projectdata";
var processID		= "#designdata";
var aboutID			= "#aboutdata";

var currentDiv		="#brainstormslide";

var swapleft = function(newdiv)
{
	$(currentDisplay).animate(
	{
		marginLeft: '-=150%',
	}, 1000);
	if (currentDisplay !== "#intro")
		$(currentDisplay).toggle();
	if (newdiv !== "#intro")
		$(newdiv).toggle();
	$(newdiv).animate(
	{
			marginLeft: '90px',
	}, 1000);
	currentDisplay = newdiv;
};

var swapup = function(newdiv)
{
	$(currentDiv).animate(
	{
		marginTop: '-=150%'
	}, 1000);
	$(newdiv).toggle();
	$(newdiv).animate(
	{
		marginTop: '0px'
	}, 1000);
	$(currentDiv).toggle();
	currentDiv = newdiv;
}

var hidenav = function()
{
	if ($("#morenavbar").is(':visible'))
	{
		$("#morenavbar").toggle();
	}
};

var highlight = function(what)
{
	$('.highlight').removeClass('highlight');
	$(what).addClass('highlight');
};

var highlight2 = function(what)
{
	$('.highlight2').removeClass('highlight2');
	$(what).addClass('highlight2');
};

$(function()
{
	$("#home").bind("click", function()
	{
		hidenav();
		swapleft("#intro");
		highlight(this);
	});
	$("#project").bind("click", function()
	{
		hidenav();
		swapleft(projectID);
		highlight(this);
	});

	$("#process").bind("click", function()
	{
		swapleft(processID);
		$("#morenavbar").toggle();
		highlight(this);
	});
	$("#about").bind("click", function()
	{
		hidenav();
		swapleft(aboutID);
		highlight(this);
	});
	$("#brainstorm").bind("click", function()
	{
		swapup("#brainstormslide");
		highlight2(this);
	});
	$("#story").bind("click", function()
	{
		swapup("#storyboardslide");
		highlight2(this);
	});
	$("#depth").bind("click", function()
	{
		swapup("#depthslide");
		highlight2(this);
	});
	$("#final").bind("click", function()
	{
		swapup("#finalslide");
		highlight2(this);
	});
});