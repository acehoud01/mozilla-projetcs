const myImages = document.querySelector("img");

myImages.onclick = function()
{
	const mySrc = myImages.getAttribute("src")
	if (mySrc === "./images/circle_pic.jpg")
	{
		myImages.setAttribute("src", "./images/moon.jpg");
	}
	else
	{
		myImages.setAttribute("src", "./images/circle_pic.jpg");
        }
}


let myHeading = document.querySelector("h1");
let myButton = document.querySelector("button");


function setUserName()
{
	const myName = prompt("Please enter your name");
	if (!myName)
	{
		setUserName();
	}
	else
	{
		localStorage.setItem("name", myName);
		myHeading.textContent = `Trees are vital, ${myName}`;
	}
}

if (!localStorage.getItem("name"))
{
	setUserName();
}
else
{
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Tress are vital, ${storedName}`;
}

myButton.onclick = () =>
{
	setUserName();
}


