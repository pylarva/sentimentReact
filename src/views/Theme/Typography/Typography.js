import React, { Component } from 'react';
import { Alert, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
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


class Typography extends Component {
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
            <Button type="submit" size="sm" color="primary" ><i className="fa fa-dot-circle-o"></i> 提交</Button>
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
