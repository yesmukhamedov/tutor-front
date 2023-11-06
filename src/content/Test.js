import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Input, Checkbox, Button, Space, Card } from "antd";
import { EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";

import {
  fetchCollection,
  add,
  update,
  remove,
  fetchQuiz,
} from "./redux/slices/tests.js";
const Test = contentValue => {
  const { TextArea } = Input;
  const { Meta } = Card;

  const dispatch = useDispatch();
  const { collection, quiz } = useSelector((state) => state.tests);

  const initialForm = {
    collectionForm: {
      collectionName: test.test,
      _id: null,
      text: "",
      options: [
        { text: "", truth: false },
        { text: "", truth: false },
      ],
    },
    quizForm: {
      collectionName: test.test,
      list: quiz.items?.map((question) => ({ id: question._id, ans: [] })),
    },
  };

  const [state, setState] = React.useState({ form: initialForm });

  React.useEffect(
    () =>
      setState({
        ...state,
        form: { ...initialForm, collectionName: test.test },
      }),
    [test]
  );
  React.useEffect(() => {
    state.form.collectionName &&
      dispatch(fetchCollection(state.form.collectionName));
  }, [state.form.collectionName]);

  console.log({ state: state, test: test.test });
  return (
    <>
      <Space
        direction="vertical"
        size={16}
        style={{ width: "80%", margin: "0 auto" }}
      >
        <Card
          style={{ width: "100%" }}
          title={
            <div>
              <TextArea
                value={state.form.text}
                onChange={(e) =>
                  setState({
                    ...state,
                    form: { ...state.form, text: e.target.value },
                  })
                }
              />
              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  disabled={
                    !(
                      state.form.collectionName &&
                      state.form.text &&
                      state.form.options?.reduce(
                        (truth, option) => option.truth || truth,
                        false
                      )
                    )
                  }
                  onClick={() => {
                    if (state.form._id) {
                      dispatch(update(state.form));
                    } else {
                      dispatch(add(state.form));
                    }
                    setState({ form: initialForm });
                    dispatch(fetchCollection(state.form.collectionName));
                  }}
                >
                  Сақтау
                </Button>
                <Button
                  type="primary"
                  onClick={() =>
                    setState({
                      ...state,
                      form: {
                        ...state.form,
                        options: [
                          ...state.form.options,
                          { id: null, text: "", truth: false },
                        ],
                      },
                    })
                  }
                >
                  Жауап үлгісін қосу
                </Button>
              </div>
            </div>
          }
        >
          {state.form.options?.map((option, index) => (
            <div
              style={{ display: "flex", gap: 10, paddingTop: 10 }}
              key={index}
            >
              <Checkbox
                checked={option.truth}
                onChange={(e) =>
                  setState({
                    ...state,
                    form: {
                      ...state.form,
                      options: state.form.options.map((o, i) => ({
                        ...o,
                        truth: index === i ? e.target.checked : o.truth,
                      })),
                    },
                  })
                }
              />
              {/* <Button
                style={{ background: option.truth? "green" : null }}
                onClick={() =>
                    setState({
                        ...state,
                        form: {
                          ...state.form,
                          options: state.form.options.map((o, i) => ({
                            ...o,
                            truth: index === i ? !o.truth : o.truth,
                          })),
                        },
                      })
                }
              >
                <CheckOutlined />
              </Button> */}
              <Input
                placeholder="Жауап үлгісі"
                value={option.text}
                onChange={(e) =>
                  setState({
                    ...state,
                    form: {
                      ...state.form,
                      options: state.form.options.map((o, i) => ({
                        ...o,
                        text: index === i ? e.target.value : o.text,
                      })),
                    },
                  })
                }
              />
              <Button
                danger
                onClick={() =>
                  setState({
                    ...state,
                    form: {
                      ...state.form,
                      options: state.form.options.filter((o, i) =>
                        index === i ? false : true
                      ),
                    },
                  })
                }
              >
                <DeleteOutlined />
              </Button>
            </div>
          ))}
        </Card>
        {collection.items.map((item, index) => (
          <Card
            style={{ marginTop: 16 }}
            key={index}
            title={
              <div
                style={{ marginLeft: 14 }}
                dangerouslySetInnerHTML={{
                  __html: index + 1 + ") " + item.text,
                }}
              />
            }
            extra={
              <div style={{ display: "flex" }}>
                <Button
                  type="link"
                  onClick={() =>
                    setState({
                      ...state,
                      form: {
                        ...state.form,
                        _id: item._id,
                        text: item.text,
                        options: item.options.map((option) => ({
                          _id: option._id,
                          text: option.text,
                          truth: option.truth,
                        })),
                      },
                    })
                  }
                >
                  <EditOutlined />
                  Өзгерту
                </Button>
                <Button
                  type="link"
                  danger
                  onClick={() => dispatch(remove(item._id))}
                >
                  <DeleteOutlined />
                  Өшіру
                </Button>
              </div>
            }
          >
            <Meta
              description={
                <ul>
                  {item.options.map((option, index) => (
                    <li
                      key={index}
                      style={{ color: option.truth ? "green" : "" }}
                    >
                      <div
                        style={{ marginLeft: 14 }}
                        dangerouslySetInnerHTML={{ __html: option.text }}
                      />
                    </li>
                  ))}
                </ul>
              }
            />
          </Card>
        ))}
      </Space>
    </>
  );
};

export default Test;
