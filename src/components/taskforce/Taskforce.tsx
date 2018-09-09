import ArrowButton from 'Atoms/arrowbutton/ArrowButton';
import * as React from 'react'
import locals from './Taskforce.css'

interface ITaskforceState {
  currentCountry: number
}

const countries: string[]= [
  'Britain',
  'USA',
  'France',
  'Russia',
  'Germany',
  'Italy',
  'Japan'
]

class Taskforce extends React.Component<{}, ITaskforceState> {

  constructor(props: any) {
    super(props)
    this.state = {
      currentCountry: 0
    }
  }

  public changeCountryBack = () => {
    const currentCountry = this.state.currentCountry === 0 ?
    countries.length -1 :
    this.state.currentCountry - 1
    this.setState({
      currentCountry
    })
  }

  public changeCountryForward = () => {
    const currentCountry = this.state.currentCountry < countries.length - 1 ?
      this.state.currentCountry + 1 :
      0

    this.setState({
      currentCountry
    })
  }

  public render () {
    return (
      <div>
        <h1 className={locals.header} >Taskforces</h1>
        <div className={locals.subheaderWithArrows}>
          <ArrowButton direction="left" action={this.changeCountryBack}/>
          <h2 className={locals.subheaderCenterText}>{countries[this.state.currentCountry]}</h2>
          <ArrowButton direction="right" action={this.changeCountryForward}/>
        </div>
      </div>
    )
  }
}

export default Taskforce
