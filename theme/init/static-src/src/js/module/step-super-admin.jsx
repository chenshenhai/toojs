import React from 'react';
import { Form, Select, Input } from 'antd';
import { connect } from 'react-redux';

const Option = Select.Option;
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};

class Module extends React.Component {
  render () {
    const { language } = this.props;
    const { textMap, lang } = language;
    return (
      <div>
        <Form style={{ width: '720', margin: 'auto' }}>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{'username'}</span>} >
            <Input
              style={{ width: '240px' }}
              placeholder="username"/>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{'password'}</span>} >
            <Input
              style={{ width: '240px' }}
              placeholder="password"/>
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{'confirm password'}</span>} >
            <Input
              style={{ width: '240px' }}
              placeholder="confirm password"/>
          </FormItem>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language };
};
export default connect(mapStateToProps)(Module);
