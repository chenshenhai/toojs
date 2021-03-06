import React from 'react';
import { Form, Select } from 'antd';
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
  handleChange (value) {
    const { dispatch } = this.props;
    dispatch({
      type: 'SELECT_LANGUAGE',
      lang: value
    });
  }
  render () {
    const { language } = this.props;
    const { textMap, lang } = language;
    return (
      <div>
        <Form style={{ width: '720', margin: 'auto' }}>
          <FormItem
            {...formItemLayout}
            label={<span style={{ lineHeight: '30px' }}>{textMap.LABEL_SELECT_LANGUAGE}</span>} >
            <Select value={lang} style={{ width: 320 }} onChange={this.handleChange.bind(this)}>
              <Option value="en">English</Option>
              <Option value="zh-cn">中文简体</Option>
            </Select>
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
