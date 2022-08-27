
import { useEffect, useState } from 'react'
import AllComments from '../../apis/getCommntsApi'
import CreateThread from '../../apis/createThread'
import DeleteComment from '../../apis/deleteComment'
import UpdateComment from '../../apis/updateComment'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

import { Alert, QA, Comment, CommentForm } from '../../components'

import Questions from '../../components/Questions'
import { useAppContext } from '../../context/appContext'
import FileUpload from '../../components/FileUpload'


const isConsulting = JSON.parse(localStorage.getItem('isConsulting'))

const token = localStorage.getItem('token');
// const user = JSON.parse(localStorage.getItem('user'))



const initQ = {
    isConsulting:localStorage.getItem('isConsulting') ? isConsulting:JSON.parse("false"),
    parentId:'6305b321cc130702c2307a0e',
    "id":0,
    "type":"radio",
    "tag":"basic",
    "pre":0,
    "question":"Eager to Provide us some Usefull information !!!",
    "optionlist":[
        {
            "option":"yes",
            "next": 1
        },
        {
            "option":"no",
            "next": -1              
        }
    ]
}



const Consultation = () => {
    const [singleFiles, setSingleFiles] = useState([]);
    const [values, setValues] = useState(initQ);
    
    const {user, showAlert, isConsulting,saveNewQuestion, getMessages, getSingleFiles } = useAppContext();
    
    const [backendComments, setBackendComments] = useState([]);
    const [rootComments, setrootComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    let currentUserId 
    if(user._id) currentUserId=user._id;
    if(user.id) currentUserId=user.id;
    console.log(currentUserId);
    console.log("From values")
    console.log(values.isConsulting);
    let questionId = 1;

    const getSingleFileslist = async () => {
        try {
            const fileslist = await getSingleFiles();
            setSingleFiles(fileslist);
        } catch (error) {
          console.log(error);
        }
    }

    const handleChangeState = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
      }

    const toggleConsultation = ()=>{
        setTimeout(() => {
            console.log("waiting")
            console.log("local-->" + localStorage.getItem('isConsulting'));
            let tempC = JSON.parse(localStorage.getItem('isConsulting'));
            console.log(tempC)
            tempC = !tempC;
            setValues({...values, isConsulting:tempC, "id":0})
            console.log(tempC)
            localStorage.setItem('isConsulting',JSON.stringify(tempC))
            
        },500)
    }
   

    const handleNext = (e) => {
        e.preventDefault()
        const answerEls = document.querySelectorAll('.answer') 
        let id
        let text = []
        answerEls.forEach(answerEl => {
            if(answerEl.checked) {
                console.log(answerEl)
                id = answerEl.id
                text.push(answerEl.value)
            }
        })
        if(parseInt(id, 10) === -1) {
            
            toggleConsultation()

        }
        const qNo = values.id;
        const question = values.question
        const tag = values.tag
        const answer = text;
        let nextQuestion ;
        Questions.forEach(question => {
            if (question.id === parseInt(id, 10)) {
                console.log("Found it")
                nextQuestion = question;
                console.log(nextQuestion)        
                values.id = nextQuestion.id;
                values.pre = nextQuestion.pre;
                values.question = nextQuestion.question;
                values.optionlist = nextQuestion.optionlist;
                values.type = nextQuestion.type;
                values.tag = nextQuestion.tag;
                if(nextQuestion.type === "select") {
                    values.inputType = true;
                }else {
                    values.inputType = false;
                }
                setValues({...values});
                console.log(values)
            }

            
        });

        console.log(nextQuestion);
        saveNewQuestion({qNo,question,tag,answer});

        
        
    }
    
    const handlePre = (e) => {
        e.preventDefault()
        let nextQuestion ;
        console.log("Pre Called")
        console.log(values.pre)
        Questions.forEach(question => {
            if (question.id === values.pre) {
                nextQuestion = question;
                console.log(nextQuestion)        
                values.id = nextQuestion.id;
                values.pre = nextQuestion.pre;
                values.question = nextQuestion.question;
                values.optionlist = nextQuestion.optionlist;
                values.type = nextQuestion.type;
                setValues({...values});
                console.log(values)
            }
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // const { gender, phone } = values
    }

    
    useEffect(() => {
        getSingleFileslist();
    }, []);

    console.log('Backend Comments', backendComments);

    // rootComments = backendComments.filter(
    //         (backendComment) => backendComment.isLevel1 === true
    // );

    console.log("root comments", rootComments)

    const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parent === commentId)
      .sort(
        (a, b) =>
          new Date(b.time).getTime() - new Date(a.time).getTime()
    );

    useEffect(()=>{
        AllComments({token}).then((datas)=>{
            datas
            .sort(
                (a, b) =>
                new Date(b.time).getTime() - new Date(a.time).getTime()
            );
            console.log("All-->",datas)
            const demoroot = datas
                                .filter((data) => data.isLevel1 === true)
            setrootComments(demoroot);
            setBackendComments(datas);
        });
    },[]);

    const addComment = (text,parentId) => {
        console.log("Comment Add",text,parentId)
        CreateThread({token,text,parentId}).then(comment => {
            var levelTest;
            if(comment.isLevel1 === null) {
                levelTest = 0;
            }else {
                levelTest = 1;
            }
            console.log("Level Test",levelTest);
            var check=0;
            if(levelTest === 1) {
                if(comment.isLevel1) {
                    check=1;
                }else {
                    check = -1;
                }
            }
            if(check === 1) {
                backendComments.push(comment);
                backendComments.sort(
                    (a, b) =>
                    new Date(b.time).getTime() - new Date(a.time).getTime()
                );
                rootComments.push(comment);
                rootComments.sort(
                    (a, b) =>
                    new Date(b.time).getTime() - new Date(a.time).getTime()
                );
                setBackendComments([...backendComments])
                setrootComments([...rootComments])
            }else {
                backendComments.push(comment);
                backendComments.sort(
                    (a, b) =>
                    new Date(b.time).getTime() - new Date(a.time).getTime()
                );
                setBackendComments([...backendComments])
            }
            console.log("Check ",check);
            setActiveComment(null);
        })
    }

    const deleteComment = (commentId) => {
        if(window.confirm('Are You Sure you want to delete! ->' + commentId)) {
            DeleteComment({token,"currentId":commentId}).then((data) => {
                console.log("age")
                console.log(backendComments)
                const updatedBackendComments = backendComments.filter(
                  (backendComment) => backendComment._id !== commentId
                ).sort(
                    (a, b) =>
                    new Date(b.time).getTime() - new Date(a.time).getTime()
                );
                console.log("pore")
                console.log(updatedBackendComments)
                setBackendComments(updatedBackendComments);
                const updatedBackendRootComments = rootComments.filter(
                    (rootComment) => rootComment._id !== commentId
                  ).sort(
                      (a, b) =>
                      new Date(b.time).getTime() - new Date(a.time).getTime()
                  );
                  setrootComments(updatedBackendRootComments);
              });
        }
    }

    const updateComment = (text, commentId) => {
        UpdateComment({token, "currentId":commentId ,"text":text}).then(() => {
          const updatedBackendComments = backendComments.map((backendComment) => {
            console.log(commentId)
            console.log(backendComment);
            if (backendComment._id === commentId) {
              return { ...backendComment, body: text };
            }
            return backendComment;
          });
          setBackendComments(updatedBackendComments);

          const updatedRootBackendComments = rootComments.map((rootComment) => {
            if (rootComment._id === commentId) {
              return { ...rootComment, body: text };
            }
            return rootComment;
          });
          setrootComments(updatedRootBackendComments);


          setActiveComment(null);
        });
      };

    return (
        <Wrapper>
        {!values.isConsulting &&
            <form className='form' onSubmit={handleSubmit}>
                {showAlert && <Alert />}

                <div className='q-center'>
                    <QA
                        question={values.question} 
                        optionlist={values.optionlist}
                        type={values.type}
                        toggleConsultation={toggleConsultation}
                    />


                    <div className='q-buttons'>
                        <button className='btn btn-block pre' type='submit' onClick={handlePre}>
                            Pre
                        </button>
                        <button className='btn btn-block next' type='submit' onClick={handleNext}>
                            Next
                        </button>
                    </div>
                </div>
            </form>
        }
        {values.isConsulting && 

        <>
            <div className='comments'>
                <h3 className="comments-title">Comments</h3>
                <div className="comment-form-title">Create Thread</div>
                <CommentForm submitLabel="Write" handleSubmit={addComment}/>
                <div className="comments-container">
                {rootComments.map((rootComment) => (
                    // <div key={rootComment._id}>{rootComment.body}</div>
                    <Comment 
                        key={rootComment._id} 
                        comment={rootComment}
                        replies={getReplies(rootComment._id)}
                        currentUserId={currentUserId}
                        deleteComment = {deleteComment}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        addComment = {addComment}
                        getReplies = {getReplies}
                        updateComment = {updateComment}
                    />
                ))}
                </div>
            </div>

            <FileUpload 
                getsingle = { () => getSingleFileslist()}
            />

            <button className='btn btn-block' onClick={toggleConsultation}>Reload Consultation</button>

        </>
        }
        
        
        </Wrapper>
    )
}
export default Consultation;