import React, {Component} from 'react';
class Login extends Component {
    constructor() {
        super();
    }

    verifyUser() {
        $("#tip").text("");
        const username = this.refs.input.value;
        if (username == "") {
            $("#tip").text("输入不能为空！");
        }
        else {
            this.props.findUsers(username);
        }
    }

    isNull() {
        const psw = this.refs.psw.value;

        $("#tip1").text("");
        $("#tip").text("");
        if (psw == "") {
            $("#tip1").text("输入不能为空！");
        }
    }

    isLegal() {
        const info = this.props.FindUsers;
        // console.log();
        if(info.isExit){
            const psw = this.refs.psw.value;
            if(info.data.password === psw){
                this.props.router.push('/studios');
            }
            else{
                $("#tip1").text("密码错误！");
            }
            }
        else {
            $("#tip").text("用户名不存在，请重新输入！");
            this.refs.psw.value = '';
            this.refs.input.value = '';
        }

        const username = this.refs.input.value;
        const psw = this.refs.psw.value;
        if(username == 'root'&&psw=='123456'){
            this.props.router.push('/schedule');
        }
    }

    clear() {
        this.refs.input.value = '';
        $("#tip").text('');
    }

    clearPsw() {
        this.refs.psw.value = '';
        $("#tip1").text('');
    }

    render() {
        return (
            <div>
                <div className="row content1">
                    <div className="kuandu col-md-offset-7" id="inputGroup">
                        <input type="text" className="form-control input" id="img" ref="input" placeholder="用户名"
                               onBlur={this.verifyUser.bind(this)} onFocus={this.clear.bind(this)}/>
                        <span id="tip"> </span><br/>
                        <input type="password" className="form-control input" id="img2" ref="psw" placeholder="密码"
                               onBlur={this.isNull.bind(this)} onFocus={this.clearPsw.bind(this)}/>
                        <span id="tip1"> </span><br/><br/>
                        <button className="btn btn-default form-control" onClick={this.isLegal.bind(this)}>登 陆</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;