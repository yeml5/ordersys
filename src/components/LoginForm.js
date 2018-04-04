/**
 * Created by yeml5 on 2018/4/4.
 */
import React from 'react'
import {Form,FormGroup,FormControl,Button,Col,Grid,Row,PageHeader,Checkbox} from 'react-bootstrap'

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state={userName:null,passWord:null,rememberme:false}
    }
    componentWillMount(){
        /**
         rememberme-cookie-remain
         **/
    }
    handleClick(){
        this.setState({rememberme:!this.state.rememberme})
    }
    render() {
        return (
            <div className="text-center">
                <Grid fluid>
                    <Row>
                        <Col xs={1} md={3}/>
                        <Col xs={10} md={6}>
                            <Form horizontal>
                                <PageHeader>B2I订单后台管理</PageHeader>
                                <FormGroup controlId="formHorizontalOA">
                                    <FormControl type="text" defaultValue={this.state.userName} placeholder="员工OA"/>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalPassword">
                                    <FormControl type="password" defaultValue={this.state.userName} placeholder="密 码"/>
                                </FormGroup>
                                <FormGroup>
                                    <Row>
                                        <Col md={3} xs={3}/>
                                        <Col md={3} mdPull={3} xs={3} xsPull={3}>
                                        <Checkbox checked={this.state.rememberme} onClick={null}>记住账号(未完)</Checkbox>
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
            </div>)
    }
}
export default LoginForm;

/** md12等分列调整 **/

/** <div className="container">
            <div className="row">
                <div className="col-md-offset-3 col-md-6" style="margin-top: 10rem">
                    <form className="form-horizontal" >
                        <span className="heading">B2I订单后台管理</span>
                        <div className="form-group">
                            <input type="text" className="form-control" id="staff_oa" placeholder="员工OA"/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" id="oa_pw" placeholder="密　码"/>
                        </div>
                        <div style="margin-left: 5rem">
                            <button  type="submit"  className="btn btn-default" onclick="smt()">登录</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        **/