
import { useEffect, useState } from 'react'
import AllComments from '../../apis/getCommntsApi'
import CreateThread from '../../apis/createThread'
import DeleteComment from '../../apis/deleteComment'
import UpdateComment from '../../apis/updateComment'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

import { Alert, QA, Comment, CommentForm } from '../../components'

import Questions from '../../components/Questions'
import { useAppContext } from '../../context/appContext'







const Consultation = () => {
    const [singleFiles, setSingleFiles] = useState([]);
    
    const {token,lawyer, getSingleFiles, isClientPresent } = useAppContext();
    let {client} = useAppContext();
    const [backendComments, setBackendComments] = useState([]);
    const [rootComments, setrootComments] = useState([]);
    const [activeComment, setActiveComment] = useState(null);
    const currentUserId = lawyer._id;
    client = JSON.parse(localStorage.getItem('client'));
    let clientId;
    if(isClientPresent) {
        clientId = client._id;
    }
    // const clientId = (()=> {
    //     if(client) {
    //         clientId = client._id;
    //         setisClientPresent(true);
    //     }else {
    //         setisClientPresent(false);
    //     }
    // });
    
    console.log(currentUserId);
    console.log("From values")

    const getSingleFileslist = async () => {
        try {
            const fileslist = await getSingleFiles();
            setSingleFiles(fileslist);
        } catch (error) {
          console.log(error);
        }
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
        if(client) {
            AllComments({token,clientId}).then((datas)=>{
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
        }
    },[]);

    const addComment = (text,parentId) => {
        console.log("Comment Add",text,parentId)
        CreateThread({token,text,parentId,clientId}).then(comment => {
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
            <div onLoad={() => window.location.reload()}></div>
            {!isClientPresent && (
                <div> 
                    Please Select Client
                </div>
            )}
            {isClientPresent && (
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
            
            )}
        </Wrapper>
    )
}
export default Consultation;