import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div>
				{props.state.sortedByName ? <button className = "ui button" disabled='true'>Hogs Are Sorted By Name!</button> : <button className = "ui button" onClick={props.sortByName}>Sort Hogs By Name!</button>}
				{props.state.sortedByWeight ? <button className = "ui button" disabled='true'>Hogs Are Sorted By Weight!</button> : <button className = "ui button" onClick={props.sortByWeight}>Sort Hogs By Weight!</button>}
				{props.state.greaseFiltered ? <button className = "ui button" onClick={props.greaseFilter}>See All Hogs!</button> : <button className = "ui button" onClick={props.greaseFilter}>See Only Greased Hogs!</button>}
			</div>
		</div>
	)
}

export default Nav
