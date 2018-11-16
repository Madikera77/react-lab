import React from 'react'

import { Provider } from './context/index'
import Routes from './routing'
import { loadJson, saveJson} from './api/saveJson'

export default class App extends React.Component {
  /* eslint-disable react/no-unused-state */
  constructor(props) {
    super(props)
    this.sortby = this.sortby.bind(this)

    this.state = {
      consultants: loadJson(),
      selected: 0,
      mode: 'read',
      updated: null,

      onChange: this.onChange.bind(this),
      select: this.select.bind(this),
      edit: this.edit.bind(this),
      create: this.create.bind(this),
      save: this.save.bind(this),
      cancel: this.cancel.bind(this),
      onSort: this.onSort.bind(this),
      deleteConsultant: this.deleteConsultant.bind(this)
    }
    this.state.consultants = this.sortby()
  }

  onChange({ target: { name, value } }) {
    this.setState(({ updated }) => ({
      updated: {
        ...updated,
        [name]: value
      }
    }))
  }

  onSort({ target: { value } }) {
    this.setState({
      consultants: this.sortby(value),
      selected: 0
    })
  }

  select(selection) {
    this.setState({
      selected: selection,
      mode: 'read'
    })
  }

  edit() {
    this.setState(({ consultants, selected }) => ({
      updated: consultants[selected],
      mode: 'edit'
    }))
  }
  create() {
    this.setState({
      updated: {},
      mode: 'write'
    })
  }
  save() {
    const { updated } = this.state
    if (!updated.firstname || !updated.lastname) return
    this.setState(({ consultants, mode, selected, updated }) => {
      const i = mode === 'write' ? consultants.length : selected
      consultants[i] = updated
      saveJson(consultants)
      return {
        consultants,
        mode: 'read',
        selected: i,
        updated: null
      }
    })
  }
  deleteConsultant() {
    this.setState(({ consultants, selected }) => {
      const consults = [...consultants]
      consults.splice(selected, 1)
      saveJson(consults)
      return {
        ...selected === consults.length ? { selected: consults.length - 1 } : {},
        consultants: consults,
        mode: 'read',
        updated: null
      }
    })
  }
  cancel() {
    this.setState({
      mode: 'read',
      updated: null
    })
  }
  /* eslint-enable react/no-unused-state */

  sortby(type = 'lastname') {
    const simpleSort = (a, b) => a < b ? -1 : a > b ? 1 : 0
    
    const alphaSort = (type) => (a, b) => {
      const simple = simpleSort(a[type], b[type])
      return simple ? simple : simpleSort(a.lastname, b.lastname)
    }
    const boolSort = (type) => (a, b) => a[type] === b[type] ? simpleSort(a.lastname, b.lastname) : a[type] === true ? -1 : 1

    const { consultants } = this.state
    const list = [...consultants]
    type === 'mission' ? list.sort(boolSort(type)) : list.sort(alphaSort(type))

    return list
  }

  render() {
    return (
      <Provider value={this.state}>
        <Routes />
      </Provider>
    )
  }
}
