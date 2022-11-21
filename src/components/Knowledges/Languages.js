import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

export default class languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Windev", xp:1},
            {id: 2, value: "Php", xp:0.8},
            {id: 3, value: "Python", xp:0.4},
            {id: 4, value: "Css", xp:2},
        ],
        frameworks: [
            {id: 1, value: "Bootstrap", xp:2},
            {id: 2, value: "React", xp:0.2},
            {id: 3, value: "Laravel", xp:0.8},
            {id: 4, value: "Django", xp:0.2},
        ]
    }

  render() {
    let {languages,frameworks} = this.state;

    return (
      <div className='languagesFrameworks'>
        <ProgressBar
            languages={languages}
            className="languagesDisplay"
            title="languages"
        />
        <ProgressBar
        languages={frameworks}
            title="frameworks & bibliotheques"
            className="frameworksDisplay"
        />
      </div>
    )
  }
}
