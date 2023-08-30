import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from './axios';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  UserOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Spin, Row, Col, Switch, Drawer, Button, Form, Input, Select, Divider, Steps, Affix, Progress, Tag, Image } from 'antd';
// import 'antd/dist/antd.min.css';//antd/dist/antd.min.css
// import 'antd/dist/antd.less';

import Multimedia, { list } from './content';
import './style.css';
import { fetchQuiz, fetchCollection, add, update, remove } from './redux/slices/tests';
import { fetchAuth, fetchRegister, fetchAuthMe } from './redux/slices/auth';
const { Sider, Content, Header, Footer } = Layout;
const { Step } = Steps;
const { Option } = Select;

function App({...props}) {

  const {} = useParams();
  const dispatch = useDispatch();
  const {quiz, collection} = useSelector(state => state.tests);
  const isQuizLoading = quiz.status === "loading";
  const isCollectionLoading = collection.status === "loading";

  const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
  });

  const onSubmit = (values) => {
    console.log(values)
  }
  // {(isTestsLoading> [...Array(5)] : tests.items).map((obj, index)=>isTestsLoading? (
  //   <Test scelet key={index} isLoading={true}> : <Test real/>
  // ))}

  const [state, setState] = React.useState({
    userInfo: {
      theme: 'light'
    },
    drawer: {
      account: false,
      login: false,
      register: false
    },
    content: ''
  });

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  function drawer(element){
    setState({...state, drawer: {...state.drawer, [element]: !state.drawer[element]}})
  }

  React.useEffect(()=>{
    dispatch(fetchAuth({email: 'prepod02@gmail.com', password: '12345678'}));
    // dispatch(fetchQuiz({collectionName: 'quiz01', count: 10}));
  }, [])

  const menu = list => list.map(listElement=>(
    listElement.subList.length
    ? <Menu.SubMenu key={listElement.value} title={<span>{listElement.label}</span>}>
        {menu(listElement.subList)}
      </Menu.SubMenu>
    : <Menu.Item key={listElement.value}>
        <span>{listElement.label}</span>
      </Menu.Item>
  ))

  const title = list => list.map(lit=>
    lit.subList.length
      ? title(lit.subList) 
      : lit.value === state.content
        ? true
        : false 
  )?.label;

  console.log(state)

  const theme = state.userInfo.theme;

  return (
    <>
      <div style={{backgroundColor: 'rgb(247 247 249)', minHeight: 55, display: 'flex', alignItems: 'center'}}>
          <Row  style={{width: '100%'}}>
              <Col span={2}><></></Col>
              <Col span={20} style={{display: 'flex', justifyContent: 'space-between'}}>
                <a href={'/'}>Python үйрену</a>
                <div>
                  <Switch 
                    style={{marginLeft: 14, marginRight: 14}}
                    checkedChildren="күн" 
                    unCheckedChildren="түн" 
                    defaultChecked 
                    onChange={bool=>setState({...state, userInfo: {...state.userInfo, theme: bool? 'light' : 'dark'}})}
                  />
                  {/* <a onClick={()=>drawer('account')}>
                    Ескендір
                  </a> */}
                  <a onClick={()=>drawer('login')}>
                    Жүйеге кіру
                  </a>
                  <Drawer
                    title="Жүйеге қосылу"
                    width={500}
                    placement="right"
                    closable={false}
                    onClose={()=>drawer('login')}
                    visible={state.drawer.login}
                  >
                    <Form
                      name="basic"
                      labelCol={{
                        span: 8,
                      }}
                      wrapperCol={{
                        span: 16,
                      }}
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item
                        label="Қолданушы аты"
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: 'Өтініш, қолданушы атын көрсетіңіз!',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Құпия сөз"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: 'Өтініш, құпия сөз енгізіңіз!',
                          },
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>
                      <Form.Item
                        wrapperCol={{
                          offset: 8,
                          span: 16,
                        }}
                      >
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                          <Button type="primary" htmlType="submit">
                            Кіру
                          </Button>
                          <Button type="primary" onClick={()=>drawer('register')}>
                            Тіркелу
                          </Button>
                        </div>
                      </Form.Item>
                    </Form>
                    <Drawer
                      title="Жүйеге тіркелу"
                      width={520}
                      closable={false}
                      onClose={()=>drawer('register')}
                      visible={state.drawer.register}
                    >
                      <Form
                        name="basic"
                        labelCol={{
                          span: 8,
                        }}
                        wrapperCol={{
                          span: 16,
                        }}
                        initialValues={{
                          remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                      <Form.Item
                        label="Қолданушы аты"
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: 'Өтініш, қолданушы атын көрсетіңіз!',
                          },
                        ]}
                      >
                        <Input prefix={<UserOutlined />}/>
                      </Form.Item>
                      <Form.Item
                        label="Электронды почта"
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: 'Өтініш, электронды почтаны көрсетіңіз!',
                          },
                        ]}
                      >
                        <Input 
                          addonAfter={
                            <Select defaultValue={"@gmail.com"} style={{width: 120}}>
                              <Option value={"@gmail.com"}>@gmail.com</Option>
                              <Option value={"@mail.ru"}>@mail.ru</Option>
                            </Select>}
                        />
                      </Form.Item>
                      <Form.Item
                        label="Құпия сөз"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: 'Өтініш, құпия сөз енгізіңіз!',
                          },
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>
                      <Form.Item
                        label="Құпия сөз"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: 'Өтініш, құпия сөз енгізіңіз!',
                          },
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>
                      <Form.Item
                        wrapperCol={{
                          offset: 8,
                          span: 16,
                        }}
                      >
                        <Button type="primary" htmlType="submit">
                          Тіркелу
                        </Button>
                      </Form.Item>
                    </Form>
                    </Drawer>
                  </Drawer>
                </div>
              </Col>
              <Col span={2}><></></Col>
          </Row>
      </div>
      <Layout>
        <Sider 
        theme={theme}
        width={256}
        >
          <Image
            preview={false}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/1920px-Python_logo_and_wordmark.svg.png"
          />
          <Menu 
            style={{marginTop: 28}}
            theme={theme}
            onClick={any=>setState({...state, content: any.key})}
            mode="inline"
            defaultOpenKeys={['Menu1_Child0_Content0', 'Menu2_Child0_Content0']}
          >
            {menu(list)}
          </Menu>
        </Sider>
        <Layout>
        <Header
          className={`${theme}Header`}
          style={{
            paddingLeft: 42,
          }}
        >
          {title(list)}
        </Header>
        <div >
          <Content
          className={`${theme} content`}
            style={{
              padding: '48px 40px 24px 24px',
              minHeight: window.innerHeight-285,
            }}
          >
            <Multimedia 
              className={`${theme}Multimedia`}
              content={state.content}
            />
            <div style={{
                margin: '20px 0',
                marginBottom: '20px',
                padding: '30px 50px',
                textAlign: 'center',
                borderRadius: '4px',
            }}>
            <Spin />
            </div>
            {/* <div style={{display: 'flex', width: '100%'}}>
              {[0, 1].includes(state.content.lesson)? null : <a style={{position: 'absolute', top: 50, right: 50}}>{'< Алдыңғы бөлім'}</a>}
              {[0].includes(state.content.lesson)? <a>Үйреніп бастау</a> : <a>{'Келесі бөлім >'}</a>}
            </div> */}
            <Affix offsetTop={120} onChange={(affixed) => console.log(affixed)} style={{ position: 'absolute', top: 250, right: 50 }}>
              <Button shape="circle" size='large'>^</Button>
            </Affix>
          </Content>
          </div>
          <Drawer
            title={"Есмухамедов Ескендір"}
            placement={'bottom'}
            height={650}
            onClose={()=>drawer('account')}
            visible={state.drawer.account}
          >
            <Row>
              <Col span={6}>
                <Steps direction="vertical" size="small" current={1}  percent={60}>
                  <Step title="Дәріс #1" description="This is a description." />
                  <Step title="Дәріс #2" description="This is a description." />
                  <Step title="Дәріс #3" description="This is a description." />
                </Steps>
              </Col>
              <Col span={18}>
                <div>
                  <Divider style={{marginTop: 0, marginBottom: 0}} orientation="left">Сенің үлгерімің</Divider>
                  <Progress
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#87d068',
                    }}
                    style={{marginTop: 14, marginBottom: 14}}
                    percent={99.9}
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                  </p>
                </div>
                <Row>
                  <Col span={6}>
                    <Progress type="circle" percent={50} width={100} />
                  </Col>
                  <Col span={6}>
                    <Progress type="circle" percent={60} width={100} />
                  </Col>
                  <Col span={6}>
                    <Progress type="circle" percent={70} width={100} />
                  </Col>
                  <Col span={6}>
                    <Progress type="circle" percent={80} width={100} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Drawer>
          <Footer
          className={`${theme}Footer`}
          style={{
            textAlign: 'center',
          }}
        >
          <Tag icon={<TwitterOutlined />} color="#55acee">
            Twitter
          </Tag>
          <Tag icon={<YoutubeOutlined />} color="#cd201f">
            Youtube
          </Tag>
          <Tag icon={<FacebookOutlined />} color="#3b5999">
            Facebook
          </Tag>
          <Tag icon={<LinkedinOutlined />} color="#55acee">
            LinkedIn
          </Tag>
          <br/>
          Almaty ©2022 Created by Yeskendyr
        </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;