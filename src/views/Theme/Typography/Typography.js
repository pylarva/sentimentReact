import React, { Component } from 'react';
import { Alert, Card, CardBody, CardHeader, Col, Row, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {
  Badge,
  Button,
  ButtonDropdown,
  CardFooter,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
} from 'reactstrap';
import axios from "../../../axios";


class Typography extends Component {

    constructor(props){
        super(props);

        this.state = {
            username : '',
            modal: false,
            large: false,
            small: false,
            primary: false,
            success: false,
            warning: false,
            danger: false,
            info: false,
        };

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.togglePrimary = this.togglePrimary.bind(this);
    }

    togglePrimary() {
        axios.ajax({
            url:'/index/',
            data:{
                params:{
                    sample_info: this.state.username
                }
            }
        }).then((res)=>{
            // console.log(res.data);
            if(res){
                this.setState({
                    machine_info: res.data.machine_server,
                    primary: !this.state.primary,
                })
            }
        });
    }

    updateInput(event){
        this.setState({username : event.target.value})
    }


    handleSubmit(){
        console.log('Your input value is: ' + this.state.username);
    //  发送POST
        let _this = this;
        axios.ajax({
            url:'/index/',
            data:{
                params:{
                    sample_info: this.state.username
                }
            }
        }).then((res)=>{
            console.log(res.data);
            if(res){
                this.setState({
                    // dataSource2:res.result.list,
                    // selectedRowKeys:[],
                    // selectedRows:null,
                    // pagination: Utils.pagination(res,(current)=>{
                    //     _this.params.page = current;
                    //     this.request();
                    // })
                })
            }
        })
    }

    // 动态获取mock数据
    request = ()=>{
        let _this = this;
        axios.ajax({
            url:'/table/list',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            if(res.code == 0){
                res.result.list.map((item, index) => {
                    item.key = index;
                })
                this.setState({
                    dataSource2:res.result.list,
                    selectedRowKeys:[],
                    selectedRows:null,
                    // pagination: Utils.pagination(res,(current)=>{
                    //     _this.params.page = current;
                    //     this.request();
                    // })
                })
            }
        })
    };


    render() {
      return (
        <div className="animated fadeIn">
        <Alert color="primary">
          <div>
            <i className="cui-lightbulb icons font-2xl d-block">注意！</i>
          </div>

          聚类和情感等级分析依赖大量数据训练机器模型,如果没有检测到模型,请先进行上传数据做数据训练。

        </Alert>
        <Card>
          <CardHeader>
            <strong>情感分析</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="textarea-input">输入文本</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="textarea" onChange={this.updateInput} name="textarea-input" id="textarea-input1" rows="9"
                         placeholder="Content..." />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="file-input">上传文件</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="file" id="file-input" name="file-input" />
                </Col>
              </FormGroup>
              <FormGroup row hidden>
                <Col md="3">
                  <Label className="custom-file" htmlFor="custom-file-input">Custom file input</Label>
                </Col>
                <Col xs="12" md="9">
                  <Label className="custom-file">
                    <Input className="custom-file" type="file" id="custom-file-input" name="file-input" />
                    <span className="custom-file-control"></span>
                  </Label>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>
            {/*<Button type="submit" size="sm" onClick={this.handleSubmit} color="primary"><i className="fa fa-dot-circle-o"></i> 提交</Button>*/}
            <Button type="submit" size="sm" onClick={this.togglePrimary} color="primary"><i className="fa fa-dot-circle-o"></i> 提交</Button>
              {/*<Button color="primary" onClick={this.togglePrimary} className="mr-1">Primary modal</Button>*/}
              <Modal isOpen={this.state.primary} toggle={this.togglePrimary}
                     className={'modal-primary ' + this.props.className}>
                  <ModalHeader toggle={this.togglePrimary}>评价结果</ModalHeader>
                  <ModalBody>
                      {this.state.machine_info}
                  </ModalBody>
                  <ModalFooter>
                      <Button color="secondary" onClick={this.togglePrimary}>错误反馈</Button>{' '}
                      <Button color="success" onClick={this.togglePrimary}>确定</Button>
                  </ModalFooter>
              </Modal>
              <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> 重置</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <strong>售后聚类</strong>
          </CardHeader>
          <CardBody>
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="textarea-input">输入文本</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                         placeholder="Content..." />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="file-input">上传文件</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="file" id="file-input" name="file-input" />
                </Col>
              </FormGroup>
              <FormGroup row hidden>
                <Col md="3">
                  <Label className="custom-file" htmlFor="custom-file-input">Custom file input</Label>
                </Col>
                <Col xs="12" md="9">
                  <Label className="custom-file">
                    <Input className="custom-file" type="file" id="custom-file-input" name="file-input" />
                    <span className="custom-file-control"></span>
                  </Label>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
          <CardFooter>
            <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> 提交</Button>
            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> 重置</Button>
          </CardFooter>
        </Card>

      </div>
    );
  }
}

export default Typography;
