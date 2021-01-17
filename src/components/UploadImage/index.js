import React, { useState } from 'react';
import { UploadImage } from '../../firebase/client';

export const UploadImageFC = () => {
    const [Image, SetImage] = useState(null);
    const [Progress, SetProgress] = useState(0);
    const handleChange = (e) => {
        if (e.target.files[0]) {
            SetImage(e.target.files[0]);
        }
    };
    const handleUpload = async () => {
        const a = await UploadImage(Image, SetProgress);
    };
    return (
        <div>
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
            <progress value={Progress} max="100" />
        </div>
    );
};
