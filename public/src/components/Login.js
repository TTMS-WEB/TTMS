import React, {Component} from 'react';
class Login extends Component {
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
        const username = this.refs.input.value;
        const psw = this.refs.psw.value;
        this.props.isLegal({username: username, psw: psw});
    }

    clear() {
        this.refs.input.value = '';
        $("#tip").text('');
    }

    clearPsw() {
        this.refs.psw.value = '';
        $("#tip1").text('');
    }

    /*登录成功跳转到首页*/
    componentWillUpdate(nextProps) {
        if (nextProps.Login.isLogged != "密码错误，请重新登陆！"){
            this.props.router.push('/');
            this.props.loadUsername();
        }
    }

    render() {
        return (
            <div>
                <div className="row content">
                    <div className="col-md-10 col-md-offset-7" id="inputGroup">
                        <input type="text" className="form-control input" id="img1" ref="input" placeholder="用户名"
                               onBlur={this.verifyUser.bind(this)} onFocus={this.clear.bind(this)}/>
                        <span id="tip">{this.props.FindUsers}</span><br/>
                        <input type="password" className="form-control input2" id="img2" ref="psw" placeholder="密码"
                               onBlur={this.isNull.bind(this)} onFocus={this.clearPsw.bind(this)}/>
                        <span id="tip">{this.props.Login.isLogged}</span><br/>
                        <button className="btn btn-default form-control" onClick={this.isLegal.bind(this)}>登 陆</button>
                        <span id="tip1"> </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;