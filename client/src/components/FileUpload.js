import React, { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './FileUpload.css';

import './FileUpload.css';

import { useAppContext } from '../context/appContext';

const initialState = {
    singleFile : '',
    multipleFiles: '',
    title: '',
    singleProgress: 0,
    multipleProgress: 0
}

const FileUpload = (props) => {
    const [singleFile, setSingleFile] = useState(initialState);
    const [multipleFiles, setMultipleFiles] = useState(initialState);
    const [title, setTitle] =  useState(initialState);
    const [singleProgress, setSingleProgress] = useState('0');
    const [multipleProgress, setMultipleProgress] = useState(initialState);

    const { singleFileUpload } =  useAppContext();

    const SingleFileChange = (e) => {
        setSingleFile(e.target.files[0]);
        setSingleProgress(0);
    }
    const MultipleFileChange = (e) => {
        setMultipleFiles(e.target.files);
        setMultipleProgress(0);
    }
    const singleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setSingleProgress(percentage);
        }
    }
    const mulitpleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const {loaded, total} = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setMultipleProgress(percentage);
        }
    }
    const uploadSingleFile = async () => {
        const formData = new FormData();
        formData.append('file', singleFile);
        await singleFileUpload(formData, singleFileOptions);
        props.getsingle();
    }
    
    // const UploadMultipleFiles = async () => {
    //     const formData = new FormData();
    //     formData.append('title', title);
    //     for (let i = 0; i < multipleFiles.length; i++) {
    //         formData.append('files', multipleFiles[i]);                      
    //     }
    //     await multipleFilesUpload(formData, mulitpleFileOptions);
    //     props.getMultiple();
    // }
    return (
        
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group">
                    <label>Select Single File</label>
                    <input type="file" className="form-control" onChange={(e) => SingleFileChange(e)} />
                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="uploadBtn" onClick={() => uploadSingleFile()}  >Upload</button>
                    </div>
                    <div className="col-2" style={{width : '7%'}}>
                        <CircularProgressbar
                            value={singleProgress}
                            text={`${singleProgress}%`}
                            styles={buildStyles({
                                display: 'flex',

                                rotation: 0.25,
                                
                                strokeLinecap: 'butt',
                                textSize: '5px',
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
                                textColor: '#f88',
                                trailColor: '#d6d6d6',
                                backgroundColor: '#3e98c7',
                                
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FileUpload;