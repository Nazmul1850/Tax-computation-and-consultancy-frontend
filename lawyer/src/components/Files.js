import { useEffect, useState } from 'react'
import download from 'downloadjs';

import Wrapper from "../../assets/wrappers/DashboardFormPage";
import FileUpload from "./FileUpload"; 
import { useAppContext } from '../../context/appContext'


const Files = () => {
    const [singleFiles, setSingleFiles] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const { getSingleFiles, downloadFile } = useAppContext();

    const getSingleFileslist = async () => {
        try {
            const fileslist = await getSingleFiles();
            setSingleFiles(fileslist.files);
        } catch (error) {
          console.log(error);
        }
    }

    useEffect(() => {
        getSingleFileslist();
    }, []);

    const downloadFiles = async (_id, path, mimetype) => {
        try{
            const result  = await downloadFile(_id);
            const split = path.split('/');
            const filename = split[split.length - 1];
            return download(result, filename, mimetype);
        } catch (error) {
            error.response && setErrorMsg(error.response.data);
        }
    }

    return (
        <Wrapper>
            <FileUpload 
                getsingle = { () => getSingleFileslist()}
            />
            
        <div className="files-container">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <table className="files-table">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Download File</th>
                </tr>
                </thead>
                <tbody>
                {singleFiles.length > 0 ? (
                    singleFiles.map(
                    ({ _id, fileName, description, filePath, fileType }) => (
                        <tr key={_id}>
                        <td className="file-title">{fileName}</td>
                        <td className="file-description">{description}</td>
                        <td>
                            <a
                            href="#/"
                            onClick={() =>
                                downloadFiles(_id, filePath, fileType)
                            }
                            >
                            Download
                            </a>
                        </td>
                        </tr>
                    )
                    )
                ) : (
                    <tr>
                    <td colSpan={3} style={{ fontWeight: '300' }}>
                        No files found. Please add some.
                    </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>

        </Wrapper>
    )
}
export default Files;