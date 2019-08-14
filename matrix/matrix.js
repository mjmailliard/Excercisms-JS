

export class Matrix {
  constructor(props) {
    this.props = props
  }

  get rows() {
    const allRows = []
    this.props.split('\n').forEach(element => allRows.push(element.split(' ')))
    return allRows.map(each => each.map(str => parseInt(str)))

  }
  get columns() {

    return this.rows[0].map((col, i) => this.rows.map(row => row[i]))
  }
}
