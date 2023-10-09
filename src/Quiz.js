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
const Quiz = (test) => {
  const { TextArea } = Input;
  const { Meta } = Card;

  const dispatch = useDispatch();
  const { quiz } = useSelector((state) => state.tests);

  const initialForm = {
    collectionName: test.test,
    list: quiz.items?.map((question) => ({ id: question._id, ans: [] })),
  };

  const [state, setState] = React.useState({ form: initialForm });

  React.useEffect(
    () =>
      setState({
        ...state,
        form: initialForm,
      }),
    [test]
  );

  React.useEffect(() => {
    state.form.collectionName &&
      dispatch(
        fetchQuiz({ collectionName: state.form.collectionName, count: 10 })
      );
  }, [state.form.collectionName]);

  const [seconds, setSeconds] = useState(1800);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  console.log({ state: state, test: test.test, quiz: quiz });
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{formatTime(seconds)}</div>
        <Button
            // disabled={seconds>=600}
          onClick={() => window.confirm("Тестті аяқтауды қалайсызба?") && dispatch(add(state.form))}
            // console.log(quiz.items.length)
            // console.log(state.form.list.reduce((count, item)=>item.ans.length? ++count : count, 0))
            // console.log(quiz.items.length!==state.form.list.reduce((count, item)=>item.ans.length? ++count : count))
        >
          Жауаптарды жіберу
        </Button>
      </div>
      <Space
        direction="vertical"
        size={16}
        style={{ width: "80%", margin: "0 auto" }}
      >
        {quiz.items?.map((item, index) => (
          <Card
            style={{ marginTop: 16 }}
            key={index}
            title={index + 1 + ") " + item.text}
          >
            <Meta
              description={
                <>
                  {item.options.map((option, index) => (
                    <div style={{ display: "flex" }} key={index}>
                      <Checkbox
                        checked={state.form.list
                          .find((form) => form.id === item._id)
                          ?.ans.includes(option.text)}
                        onChange={(e) =>
                          setState({
                            ...state,
                            form: {
                              ...state.form,
                              list: state.form.list?.map((form) =>
                                form.id === item._id
                                  ? form.ans.includes(option.text)
                                    ? {
                                        ...form,
                                        ans: form.ans.filter(
                                          (an) => an !== option.text
                                        ),
                                      }
                                    : {
                                        ...form,
                                        ans: [...form.ans, option.text],
                                      }
                                  : form
                              ),
                            },
                          })
                        }
                      />
                      <span style={{ marginLeft: 14 }}>{option.text}</span>
                    </div>
                  ))}
                </>
              }
            />
          </Card>
        ))}
      </Space>
    </>
  );
};

export default Quiz;
