/**
 * Created by yeml5 on 2018/4/8.
 */
import React from 'react'
import {Navbar,Nav,NavItem} from 'react-bootstrap'
import {connect} from 'react-redux'

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={NavBarActiveKey:null}
    }

    handleSelect1(event){
        this.setState({NavBarActiveKey:1})
    }

    handleSelect2(event){
        this.setState({NavBarActiveKey:2})
    }

    render(){
        return (
        <Navbar inverse collapseOnSelect fixedTop style={{paddingLeft:0,paddingRight:0}} >
            <Navbar.Header>
                <Navbar.Text> <h3><strong>B2I订单后台管理</strong></h3></Navbar.Text>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                    <Nav bsStyle="pills" activeKey={this.state.NavBarActiveKey} style={{marginTop:17}}>
                        <NavItem eventKey={1} href="#" className="navItem" onSelect={this.handleSelect1.bind(this)}>
                            <h4>Catchup相关处理</h4>
                        </NavItem>
                        <NavItem eventKey={2} href="#" onSelect={this.handleSelect2.bind(this)}>
                            <h4>B2I相关Web应用</h4>
                        </NavItem>
                    </Nav>
                    <Nav pullRight style={{marginTop:20}}>
                        <Navbar.Text>
                            <h5>当前用户:<Navbar.Link href="#">用户</Navbar.Link></h5>
                        </Navbar.Text>
                        <Navbar.Link href="#">
                            <span>登出</span>
                        </Navbar.Link>
                    </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default NavBar