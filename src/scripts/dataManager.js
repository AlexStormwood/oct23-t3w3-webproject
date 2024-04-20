// Declare JS data that we want to store 
let cssThemes = [

];

let pageTheme = "dark";



/**
 * Retrieve, assign, and return the latest stored CSS theme list from the browser localstorage.
 * @author BigfootDS
 *
 * @returns Array of objects. 
 */
function getStoredCssThemes(){
	// Update the cssTheme array
	let rawJsonStringCssThemes = localStorage.getItem("cssThemes");
	cssThemes = JSON.parse(rawJsonStringCssThemes);
	// Return the updated data 
	return cssThemes;
}


/**
 * Retrieve, assign, and return the latest stored page theme from the browser localstorage.
 * @author BigfootDS
 *
 * @returns String. Should be "light" or "dark".
 */
function getStoredPageTheme(){
	pageTheme = localStorage.getItem("pageTheme");
	return pageTheme;
}


// Create/Update localstorage
function setCssThemesToStorage(){
	let dataAsJsonString = JSON.stringify(cssThemes);
	localStorage.setItem("cssThemes", dataAsJsonString);
}

function setPageThemeToStorage(){
	localStorage.setItem("pageTheme", pageTheme);
}


// Check if data exists,
// if it does, retrieve it,
// else, set default variables to localstorage
if (localStorage.getItem("pageTheme") && localStorage.getItem("cssThemes")?.length > 0){
	getStoredCssThemes();
	getStoredPageTheme();
} else {
	setCssThemesToStorage();
	setPageThemeToStorage();
}










/*

cssThemes = [
	{
		name: "blah blah 100",
		hex: "000000"
	},
	{
		name: "blah blah 100",
		hex: "000000"
	}
]

"[[Object object], [Object object]]"

JSON.stringify(cssThemes);

"[{'name':'blah blah 100', 'hex': '000000'}, {'name':'blah blah 100', 'hex': '000000'}]""

*/






// Delete localstorage 