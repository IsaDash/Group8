import React, { Component } from 'react';

export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
          fields: {},
          errors: {}
        }
  
        this.handleChange = this.handleChange.bind(this);
        this.submitContactForm = this.submitContactForm.bind(this);
  
    };


    handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
        fields
    });

    }
  
    submitContactForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["txtFname"] = "";
            fields["txtLname"] = "";
            fields["txtEmail"] = "";
            fields["txtMessage"] = "";
            this.setState({fields:fields});
            alert("Form submitted");
        }

    }
  
    validateForm() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["txtFname"]) {
            formIsValid = false;
            errors["txtFname"] = "Please Enter Your First Name.";
        }

        if (typeof fields["txtFname"] !== "undefined") {
            if (!fields["txtFname"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["txtFname"] = "Please Enter Alphabet Characters Only.";
            }
        }


        if (!fields["txtLname"]) {
            formIsValid = false;
            errors["txtLname"] = "Please Enter Your Last Name.";
        }

        if (typeof fields["txtLname"] !== "undefined") {
            if (!fields["txtLname"].match(/^[a-zA-Z ]*$/)) {
            formIsValid = false;
            errors["txtLname"] = "Please Enter Alphabet Characters Only.";
            }
        }

        if (!fields["txtEmail"]) {
            formIsValid = false;
            errors["txtEmail"] = "Please Enter Your Email.";
        }

        if (typeof fields["txtEmail"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["txtEmail"])) {
            formIsValid = false;
            errors["txtEmail"] = "Please Enter Valid Email.";
            }
        }


        if (!fields["txtMessage"]) {
            formIsValid = false;
            errors["txtMessage"] = "Please Enter Your Message.";
        }
		
        this.setState({
            errors: errors
        });
        return formIsValid;
    }  
    render() {
        return (
            <div class="container">
                <form class="form-horizontal" method="post"  name="contactform" onSubmit= {this.submitContactForm}>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="txtFname">First Name:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="txtFname" placeholder="Enter First Name" name="txtFname" onChange={this.handleChange}/>
                            <div className="errorMsg">{this.state.errors.txtFname}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="txtLname">Last Name:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="txtLname" placeholder="Enter Last Name" name="txtLname" onChange={this.handleChange}/>
                            <div className="errorMsg">{this.state.errors.txtLname}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="txtEmail">Email:</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control" id="txtEmail" placeholder="Enter Email" name="txtEmail" onChange={this.handleChange}/>
                            <div className="errorMsg">{this.state.errors.txtEmail}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label col-sm-2" for="txtMessage">Message:</label>
                        <div class="col-sm-10">
                            <textarea name="txtMessage" class="form-control" id="txtMessage" onChange={this.handleChange}></textarea>
                            <div className="errorMsg">{this.state.errors.txtMessage}</div>
                        </div>
                    </div>
                    <div class="form-group">        
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}