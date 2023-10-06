import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Col, Row, Input, Checkbox, Button, Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { fetchCollection, add, update, remove } from './redux/slices/tests.js';
const AdminPanel = () => {
    const { TextArea } = Input;
    const { Meta } = Card;

    const dispatch = useDispatch();
    const {collection} = useSelector(state => state.tests);
    const isCollectionLoading = collection.status === "loading";

  React.useEffect(()=>{
    // dispatch(login({email: 'prepod02@gmail.com', password: '12345678'}));
    // dispatch(fetchQuiz({collectionName: 'quiz01', count: 10}));
    console.log('nono')
  }, []);

    const [state, setState] = React.useState({
        selectedCollection: 'quiz01',
        testForm: {
            collectionName: "",
            _id: null,
            text: '',
            options: []
        }
    });

    React.useEffect(()=>state.selectedCollection && dispatch(fetchCollection(state.selectedCollection)), [state.selectedCollection]);
    
    React.useEffect(()=>setState({...state, testForm: {...state.testForm, collectionName: state.selectedCollection}}), [state.selectedCollection])



    console.log(state);
    return (
        <Row>
            <Col span={12} />
            <Col span={12} >
                <div style={{display: 'flex'}}>
                    <TextArea value={state.testForm.text} onChange={(e) => setState({...state, testForm: {...state.testForm, text: e.target.value}})}/>
                    <Button type="primary" onClick={()=>setState({...state, testForm: {...state.testForm, options: [...state.testForm.options, {id: null, text: '', truth: false}]}})}>Жауап үлгісін қосу</Button>
                    <Button
                    // disabled={!(state.testForm.collectionName && state.testForm.text && state.testForm.options?.reducer((truth, o)=>o.truth || truth, false))}
                    onClick={()=>{
                        state.testForm._id? dispatch(add(state.testForm)) : dispatch(add(state.testForm));
                        
                        setState({...state, testForm: {
                            _id: null,
                            text: '',
                            options: []
                        }});
                    }}>Сақтау</Button>
                </div>
                {state.testForm.options.map((option, index)=>
                    <div style={{display: 'flex'}} key={index}>
                        <Checkbox checked={option.truth} onChange={e=> setState({...state, testForm: {...state.testForm, 
                        options: state.testForm.options.map((o, i)=>({...o, truth: index===i? e.target.checked : o.truth}))}})}/>
                        <Input placeholder="Жауап үлгісі" value={option.text} onChange={e=> setState({...state, testForm: {...state.testForm, 
                        options: state.testForm.options.map((o, i)=>({...o, text: index===i? e.target.value : o.text}))}})}/>
                        <Button danger onClick={()=>setState({...state, testForm: {...state.testForm, options: state.testForm.options.filter((o, i)=>index===i? false : true)}})}>-</Button>
                    </div>
                )}
                {collection.items.map((item, index)=>
                <Card key={item._id} title={index+1+') '+item.text} extra={<div style={{display: 'flex'}}><Button type="link" onClick={()=>setState({...state, testForm: {_id: item._id, text: item.text, options: item.options}})}><EditOutlined />Өзгерту</Button><Button type="link" danger onClick={()=>dispatch(remove(item._id))}><DeleteOutlined />Өшіру</Button></div>} style={{ width: 300, marginTop: 16 }} loading={isCollectionLoading}>
                    <Meta
                    description={<ul>
                            {item.options.map(option=><li key={option._id} style={{color: option.truth? 'green' : ''}}>{option.text}</li>)}
                        </ul>}
                    />
                </Card>)}
            </Col>
        </Row>
    //     <Row>
    //         <Col span={12}>
    //             {/* <React.Fragment>
    //                 Админский Панель
    //                 <Tree/>
    //             </React.Fragment> */}
    //         </Col>
    //         <Col span={12}>
    //             <TextArea rows={4} />
    //         </Col>
    //   </Row>
    )
}

export default AdminPanel;