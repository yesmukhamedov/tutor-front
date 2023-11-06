import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Input, Checkbox, Button, Space, Card } from "antd";
import { EditOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";

import {
  fetchCollection,
  check,
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
    questions: quiz.items?.map((question) => ({ _id: question._id, ans: [] })),
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
        fetchQuiz({ collectionName: state.form.collectionName, count: 5 })
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
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Card
          size="small"
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* <span>Тақырып бойынша білім тексеру {formatTime(seconds)}</span> */}
          <Button
            // disabled={seconds>=600}
            onClick={() =>
              window.confirm("Тестті аяқтауды қалайсызба?") &&
              dispatch(check(state.form))
            }
            // console.log(quiz.items.length)
            // console.log(state.form.questions.reduce((count, item)=>item.ans.length? ++count : count, 0))
            // console.log(quiz.items.length!==state.form.questions.reduce((count, item)=>item.ans.length? ++count : count))
          >
            Жауаптарды жіберу
          </Button>
        </Card>
      </Space>
      <Space
        direction="vertical"
        size={16}
        style={{ width: "80%", margin: "0 auto" }}
      >
        {quiz.items?.map((item, index) => (
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
          >
            <Meta
              description={
                <>
                  {item.options.map((option, index) => (
                    <div style={{ display: "flex" }} key={index}>
                      <Checkbox
                        checked={state.form.questions
                          .find((form) => form._id === item._id)
                          ?.ans.includes(option.text)}
                        onChange={(e) =>
                          setState({
                            ...state,
                            form: {
                              ...state.form,
                              questions: state.form.questions?.map((form) =>
                                form._id === item._id
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
                      <div
                        style={{ marginLeft: 14 }}
                        dangerouslySetInnerHTML={{ __html: option.text }}
                      />
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
