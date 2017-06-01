import React, {Component} from 'react';

export default class Register extends Component {
    verifyUsername() {
        let username = this.refs.username.value;
        this.props.onExit(username);
    }

    focusUsername() {
        this.refs.username.value = '';
        $("#usernameTip").text("");
    }

    verifyPassword() {
        let password = this.refs.password.value;
        let regexp = /^\w{6,16}$/;
        if (!regexp.test(password)) {
            $("#passwordTip").text("请将密码设置为6-16位字母数字");
        }
    }

    focusPassword() {
        this.refs.password.value = '';
        $("#passwordTip").text("");
    }

    repeatPassword() {
        let password = this.refs.password.value;
        let confirmPassword = this.refs.confirmPassword.value;
        if (password !== confirmPassword) {
            $("#repeatTip").text("与初始密码不一致");
        }
    }

    focusRepeatPassword() {
        this.refs.confirmPassword.value = '';
        $("#repeatTip").text("");
    }

    register() {
        let psTip = $("#passwordTip").text();
        let rpsTip = $("#repeatTip").text();
        if (this.props.Register != "false") {
            $("#usernameTip").text("用户名已被注册，请重新输入");
        }
        else if(psTip!=''){
            $("#img2").focus();
        }
        else if(rpsTip!=''){
            $("#img3").focus();
        }
        else{
            let username = this.refs.username.value;
            let password = this.refs.password.value;
            let sex = this.refs.sex.value;
            let phone = this.refs.phone.value;
            let address = this.refs.sex.value;
            let content = {id,username, password,sex,phone,address};
            this.props.onRegister(content);
        }
    }

    render() {
        return <div>
            <div className="row content1">
                <div className="col-md-10 col-md-offset-7" id="inputGroup">
                    <input type="text" ref="username" className="form-control input" id="img1" placeholder="用户名"
                           onFocus={this.focusUsername.bind(this)} onBlur={this.verifyUsername.bind(this)}/>
                    <span id="usernameTip"> </span><br/>
                    <input type="password" id="img2" className="form-control input" placeholder="请将密码设置为6-16位字母数字"
                           ref="password" onBlur={this.verifyPassword.bind(this)}
                           onFocus={this.focusPassword.bind(this)}/>
                    <span id="passwordTip"> </span><br/>
                    <input type="password" id="img3" placeholder="请重复输入密码" className="form-control input"
                           ref="confirmPassword" onBlur={this.repeatPassword.bind(this)}
                           onFocus={this.focusRepeatPassword.bind(this)}/>
                    <span id="repeatTip"> </span><br/>
                    <input type="text" id="img3" placeholder="性别" className="form-control input"
                           ref="sex" />
                    <span id="repeatTip"> </span><br/>
                    <input type="text" id="img3" placeholder="电话" className="form-control input"
                           ref="phone"/>
                    <span id="repeatTip"> </span><br/>
                    <input type="text" id="img3" placeholder="地址" className="form-control input"
                           ref="address"/>
                    <span id="repeatTip"> </span><br/>
                    <button onClick={this.register.bind(this)} className="btn btn-default form-control">注册</button>
                </div>
            </div>
        </div>
    }
}
