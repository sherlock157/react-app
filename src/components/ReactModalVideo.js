import React, {useState} from 'react';
import {Button} from "reactstrap";
import ModalVideo from "react-modal-video";

const ReactModalVideo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button color="danger" onClick={() => setIsOpen(true)}>Open Modal video</Button>

            <ModalVideo channel="youtube" isOpen={isOpen} videoId="9kqql88J7rY" onClose={() => setIsOpen(false)}/>
        </div>
    );
};

export default ReactModalVideo;