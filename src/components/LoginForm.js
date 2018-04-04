/**
 * Created by yeml5 on 2018/4/4.
 */
import React from 'react'
import {Form,FormGroup,FormControl,Button,Col,Grid,Row,PageHeader,Checkbox,Modal} from 'react-bootstrap'

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={userName:'',passWord:'',rememberme:false,show:false}
    }
    componentWillMount(){
        /**
         记住账号 cookie预留
         **/
    }
    handleClick(){
        this.setState({rememberme:!this.state.rememberme})
    }
    handleSubmit(event){
        event.preventDefault();
        if (this.state.userName === '' || this.state.passWord === ''){
            this.setState({show:true});}
        else{
            /**发送请求**/
            }
    }

    handleClose(event){
        this.setState({show:false})
    }

    changeUserName(event){
        this.setState({userName:event.target.value})
    }

    changePassWord(event){
        this.setState({passWord:event.target.value})
    }

    render() {
        return (
            <div className="text-center">
                <Grid fluid>
                    <Row>
                        <Col xs={1} md={3}/>
                        <Col xs={10} md={6}>
                            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                <PageHeader>B2I订单后台管理</PageHeader>
                                <FormGroup controlId="formHorizontalOA">
                                    <FormControl type="text" defaultValue={this.state.userName} placeholder="员工OA"
                                                 onChange={this.changeUserName.bind(this)}/>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalPassword">
                                    <FormControl type="password" defaultValue={this.state.passWord} placeholder="密 码"
                                                 onChange={this.changePassWord.bind(this)}/>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col md={3} xs={3}/>
                                        <Col md={3} mdPull={3} xs={3} xsPull={3}>
                                            <Checkbox checked={this.state.rememberme}
                                                      onClick={null}>记住账号(未完)</Checkbox>
                                        </Col>
                                        <Col md={3} mdPush={3} xs={3} xsPush={3}>
                                            <a>联系管理员</a>
                                        </Col>
                                        <Col md={3}/>
                                    </Row>
                                </FormGroup>
                                <FormGroup>
                                    <Button bsSize="large" bsStyle="success" type="submit">登 录</Button>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col xs={1} md={3}/>
                    </Row>
                </Grid>
                <Modal show={this.state.show} onHide={this.handleClose.bind(this)} bzSize="small" >
                    <Modal.Header closeButton/>
                    <Modal.Body>
                        <h4 className="text-center">用户或密码不能为空</h4>
                    </Modal.Body>
                </Modal>
            </div>)
    }
}
export default LoginForm;
