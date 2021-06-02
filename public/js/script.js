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
	let billable_hours = []
	let total_hrs = []
	let productivity = []
	
	employee.forEach(employee => {
		total_hrs.push([
			employee.total_hrs
		])
	})

	employee.forEach(employee => {
		productivity.push([
			employee.productivity
		])
	})

	employee.forEach(employee => {
		
		billable_hours.push([
			employee.billable_hours,
			// employee.billable_hours,
			// employee.productivity
		])
	})
			
	
// console.log(`from emp lettest :${employeeInfo}`)



var ctx = document.getElementById('myChart')
// ctx.height = 100
// ctx.width = 10
// const data = {
// 	labels : [
// 		'red',
// 		'green',
// 		'blue'
// 	],
// 	datasets : [
// 		{
// 			label :"my first data set",
// 			data :[300,120,232],
// 			backgroundColor : [
// 				'rgb(255, 99, 132)',
// 				'rgb(54, 162, 235)',
// 				'rgb(255, 205, 86)'
// 			],
// 			hoverOffset : 4
// 		}
// 	]
//

// let total_hrs = employeeInfo

var data = {
	labels : [
				'total_hours',
				'billable_hours',
				'productivity'
			],
	datasets : [
		{
			label :"my first data set",
			data :[
				total_hrs,
				billable_hours,
				productivity
			],
			backgroundColor : [
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)',
				'rgb(255, 205, 86)'
			],
			hoverOffset : 4
		}
	], 
}

var lineChart = new Chart(ctx, {
	type: 'pie',
	data: data
	// options: {
	// 		maintainAspectRatio: false,
	// 		bezierCurve: false,
	// 	}
	})
})

  