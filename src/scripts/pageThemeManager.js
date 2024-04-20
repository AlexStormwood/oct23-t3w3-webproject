const themes = {
	light: {
		"theme-50":"#f7fbff",
		"theme-100":"#f0f6ff",
		"theme-200":"#e0eeff",
		"theme-300":"#d1e5ff",
		"theme-400":"#c2dcff",
		"theme-500":"#b3d4ff",
		"theme-600":"#6babff",
		"theme-700":"#2483ff",
		"theme-800":"#005fdb",
		"theme-900":"#004094",
		"theme-950":"#003170"
	},
	dark: {
		"theme-50":"#f7fbff",
		"theme-100":"#dbe9fc",
		"theme-200":"#000000",
		"theme-300":"#000000",
		"theme-400":"#000000",
		"theme-500":"#000000",
		"theme-600":"#000000",
		"theme-700":"#000000",
		"theme-800":"#000000",
		"theme-900":"#000000",
		"theme-950":"#000000"
	}
}

/*
	// Light mode blues 
	--demosite-50: #f7fbff;
	--demosite-100: #f0f6ff;
	--demosite-200: #e0eeff;
	--demosite-300: #d1e5ff;
	--demosite-400: #c2dcff;
	--demosite-500: #b3d4ff;
	--demosite-600: #6babff;
	--demosite-700: #2483ff;
	--demosite-800: #005fdb;
	--demosite-900: #004094;
	--demosite-950: #003170;

	// Dark mode blues
	--demosite-50: #e5ebf4;
	--demosite-100: #cbd8e9;
	--demosite-200: #97b1d2;
	--demosite-300: #6389bc;
	--demosite-400: #406495;
	--demosite-500: #294160;
	--demosite-600: #263b58;
	--demosite-700: #22364f;
	--demosite-800: #1e3047;
	--demosite-900: #1b2a3e;
	--demosite-950: #19273a;

*/



// Update #pageThemeHeading text
function updatePageThemeHeading(){
	let headingToUpdate = document.getElementById("pageThemeHeading");
	headingToUpdate.textContent = getStoredPageTheme();
}

// Update #pageThemeButton text 
function updatePageThemeButtonText(){
	let buttonToUpdate = document.getElementById("pageThemeButton");

	let textToShow = "";

	if (getStoredPageTheme() == "dark"){
		textToShow = "Toggle To Light Mode";
	} else {
		textToShow = "Toggle to Dark Mode";
	}

	buttonToUpdate.textContent = textToShow;

}

// Add onclick to #pageThemeButton
function togglePageTheme(){
	if (getStoredPageTheme() == "dark"){
		pageTheme = "light";
	} else {
		pageTheme = "dark";
	}
	setPageThemeToStorage();
	
	applySavedTheme();
}


// Apply theme from localstorage
function applySavedTheme(){
	updatePageThemeButtonText();
	updatePageThemeHeading();
	updateCssVariables();
}


// Update CSS variables based on current theme 
function updateCssVariables(){
	let themeName = getStoredPageTheme();
	// for every CSS variable in themes["light"]
	for (const variable in themes[themeName]){
		document.documentElement.style.setProperty(`--${variable}`, themes[themeName][variable]);
		console.log("Updated CSS variable --" + variable);

	}
}


let pageThemeToggleButton = document.getElementById("pageThemeButton");
pageThemeToggleButton.addEventListener("click", togglePageTheme);

applySavedTheme();