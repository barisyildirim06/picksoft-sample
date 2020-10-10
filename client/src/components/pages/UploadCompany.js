import React, { useState } from 'react'
import FileUpload from '../utils/FileUpload'
import { connect } from 'react-redux'
import { MAXIMUM_VALUE, MINIMUM_VALUE } from '../../_actions/types'
import Axios from 'axios';




function UploadCompany(props) {

    const [CompanyName, setCompanyName] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")

    const [Imageshorizontal, setImageshorizontal] = useState([])

    const onCompanyNameChange = (event) => {
        setCompanyName(event.currentTarget.value)
        if (!CompanyName || !DescriptionValue || !props.MaximumSpendValue || !props.MinimumSpendValue || !Imageshorizontal) {
            document.getElementById("submit-button").style.backgroundColor = "grey"
        } else (document.getElementById("submit-button").style.backgroundColor = "#006ecf")
    }
    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
        if (!CompanyName || !DescriptionValue || !props.MaximumSpendValue || !props.MinimumSpendValue || !Imageshorizontal) {
            document.getElementById("submit-button").style.backgroundColor = "grey"
        } else (document.getElementById("submit-button").style.backgroundColor = "#006ecf")
    }
    const updateImageshorizontal = (newImages) => {
        setImageshorizontal(newImages)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!CompanyName || !DescriptionValue || !props.MaximumSpendValue || !props.MinimumSpendValue || !Imageshorizontal) {
            alert('Fill all the fields!!')
            document.getElementById("submit-button").style.backgroundColor = "grey"
        }


        const variables = {
            //reduxtan çektik,
            minimumspend: props.MinimumSpendValue,
            maximumspend: props.MaximumSpendValue,
            companyname: CompanyName,
            description: DescriptionValue,
            imageshorizontal: Imageshorizontal
        }

        if (props.MaximumSpendValue < props.MinimumSpendValue) {
            return alert('Maximum Value should be larger than minimum value')
        } else {
            Axios.post('/api/product/uploadProduct', variables)
                .then(response => {
                    if (response.data.success) {
                        alert('Product Successfully Uploaded')
                        props.history.push('/')
                    } else {
                        alert('Failed to upload Product')
                    }
                })
        }

    }

    return (
        <div className="spaceHero">
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h1>Add New Company!</h1>
                </div>

                <form onSubmit={onSubmit}>
                    {/* DropZone */}
                    <h4 style={{ textAlign: 'center', marginBottom: '1rem' }}>16:9 photograph should be uploaded for better quality</h4>
                    <FileUpload refreshFunction={updateImageshorizontal} />
                    <br />
                    <br />
                    <label className="upload-label">Company Name</label>
                    <input className="upload-input"
                        type="text"
                        onChange={onCompanyNameChange}
                        value={CompanyName}
                    />
                    <br />
                    <br />
                    <label className="upload-label">Minimum Spend Value as $</label>
                    <input className="upload-input"
                        type="text"
                        onChange={props.onMinimumChange}
                        value={props.MinimumSpendValue}
                    />
                    <br />
                    <br />
                    <label className="upload-label">Maximum Spend Value as $</label>
                    <input className="upload-input"
                        type="text"
                        onChange={props.onMaximumChange}
                        value={props.MaximumSpendValue}
                    />
                    <br />
                    <br />
                    <label>Description</label>
                    <textarea cols="100" rows="20"
                        onChange={onDescriptionChange}
                        value={DescriptionValue}
                    />
                    <br /><br />
                    <button
                        onClick={onSubmit}
                        id="submit-button"
                    >
                        Submit
            </button>

                </form>


            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        MinimumSpendValue: state.MinimumSpendValue,
        MaximumSpendValue: state.MaximumSpendValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMinimumChange: (event) => {
            let amount = parseFloat(event.currentTarget.value);
            if (isNaN(amount) || amount < 0 || event.currentTarget.value[0] === '0') {
                amount = '';
            }
            const action = { type: MINIMUM_VALUE, payload: amount }
            dispatch(action)
        },
        onMaximumChange: (event) => {
            let amount = parseFloat(event.currentTarget.value);
            if (isNaN(amount) || amount < 0 || event.currentTarget.value[0] === '0') {
                amount = '';
            }
            const action = { type: MAXIMUM_VALUE, payload: amount }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadCompany)
