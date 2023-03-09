import React, { Component } from 'react'
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import { MdCheckBox } from 'react-icons/md'
import './CustomCheckbox.css'
class CustomCheckbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }
    _onclick = () => {
        this.setState({
            checked: !this.state.checked
        })
        this.props.checkboxChange(!this.state.checked)
    }
    render() {
        const { label, fontSize } = this.props
        return (
            <div className='checkbox' onClick={() => this._onclick()}>
                <div>
                    {
                        this.state.checked ? <MdCheckBox className='checkbox-checked' size={fontSize} /> : <MdCheckBoxOutlineBlank size={fontSize} />
                    }
                </div>
                <span>{label}</span>
            </div>
        )
    }
}

export default CustomCheckbox