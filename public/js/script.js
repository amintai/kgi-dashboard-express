// const { default: fetch } = require("node-fetch")


const primaryColor = '#4834d4'
const warningColor = '#f0932b'
const successColor = '#6ab04c'
const dangerColor = '#eb4d4b'

const themeCookieName = 'theme'
const themeDark = 'dark'
const themeLight = 'light'

const body = document.getElementsByTagName('body')[0]

function setCookie(cname, cvalue, exdays) {
  var d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  var expires = "expires="+d.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
  var name = cname + "="
  var ca = document.cookie.split(';')
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ""
}

loadTheme()

function loadTheme() {
	var theme = getCookie(themeCookieName)
	body.classList.add(theme === "" ? themeLight : theme)
}
document.getElementById('theme').addEventListener("click" , () => {
		if (body.classList.contains(themeLight)) {
		body.classList.remove(themeLight)
		body.classList.add(themeDark)
		setCookie(themeCookieName, themeDark)
	} else {
		body.classList.remove(themeDark)
		body.classList.add(themeLight)
		setCookie(themeCookieName, themeLight)
	}
})

// function switchTheme() {
// 	// alert()
// 	if (body.classList.contains(themeLight)) {
// 		body.classList.remove(themeLight)
// 		body.classList.add(themeDark)
// 		setCookie(themeCookieName, themeDark)
// 	} else {
// 		body.classList.remove(themeDark)
// 		body.classList.add(themeLight)
// 		setCookie(themeCookieName, themeLight)
// 	}
// }

// function collapseSidebar() {
// 	body.classList.toggle('sidebar-expand')
// }
document.getElementById('col-sidebar').addEventListener("click" , () => {
		body.classList.toggle('sidebar-expand')

})

window.onclick = function(event) {
	openCloseDropdown(event)
}

function closeAllDropdown() {
	var dropdowns = document.getElementsByClassName('dropdown-expand')
	for (var i = 0; i < dropdowns.length; i++) {
		dropdowns[i].classList.remove('dropdown-expand')
	}
}

function openCloseDropdown(event) {
	if (!event.target.matches('.dropdown-toggle')) {
		// 
		// Close dropdown when click out of dropdown menu
		// 
		closeAllDropdown()
	} else {
		var toggle = event.target.dataset.toggle
		var content = document.getElementById(toggle)
		if (content.classList.contains('dropdown-expand')) {
			closeAllDropdown()
		} else {
			closeAllDropdown()
			content.classList.add('dropdown-expand')
		}
	}
}

// const emp = 'http://localhost:3000/chart/:chart_id'
// fetch(emp)
// .then(res => {
// 	return res.json()
// })



// creates a variable for url we want to fetch
const ebtn = document.getElementById('chart_btn')
const eid = document.getElementById('chart_id').value
ebtn.addEventListener('click' , () => {
	alert(eid)
})

//  const url = `http://localhost:2000/api/?chart_id=10`
 const url = `http://localhost:2000/api/chart_id/?chart_id=${eid}`

// fetch call to our /api/data page
 fetch(url)
.then(res => {
	if(!res.ok) {
		throw new Error(res.statusText)
	}
	// returns data from /api/data page in json format to next promise
	return res.json()
})

.then(data => {
	console.log(data)
	let employee = data
	let employeeInfo = []

	employee.forEach(employee => {
		
		employeeInfo.push([
			employee.name,
			employee.total_resloved,
			employee.total_created
		])
	})
			
	
console.log(`from emp lettest :${employeeInfo}`)



var ctx = document.getElementById('myChart')
ctx.height = 500
ctx.width = 500
var data = {
	labels: ['January', 'February', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	datasets: [{
		fill: true,
		label: 'Completed',	
		borderColor: successColor,
		backgroundColor: [
			'rgba(50,205,50,0.4)'
		],
		data: [100, 115, 130, 100, 123, 88, 99, 66, 120, 52, 59],
		// data: employeeInfo,
		borderWidth: 2,
		lineTension: 0,
	}, {
		fill: true,
		label: 'Issues',
		borderColor: dangerColor,
		backgroundColor : [
			'rgba(255,99,132,0.4)'
		],
		data: [66, 44, 12, 48, 99, 56, 78, 23, 100, 22, 47],
		borderWidth: 2,
		lineTension: 0,
	}]
}

var lineChart = new Chart(ctx, {
	type: 'bar',
	data: data,
	options: {
			maintainAspectRatio: false,
			bezierCurve: false,
		}
	})
})

  